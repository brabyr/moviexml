import * as React from 'react';
import { Button, Grid, Typography,Box,  Link } from '@mui/material';

import MMCForm from './MMCForm';
import MECForm from './MECForm';
import { Divider } from '@mui/material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import CustomTextValidator from 'component/CustomTextValidator';
import { useParams } from 'react-router-dom';

// import { mec, mmc } from 'utils/demo';
import { createNewMovie, getMovieDetail, updateMovie } from 'api'
import _ from 'lodash';

import MECContext from 'context/MECContext';
import MMCContext from 'context/MMCContext';

export default function CreateForm() {

  const { id } = useParams();

  const formRef = React.useRef<any>();
  const MMCFormRef = React.useRef<any>();
  const MECFormRef = React.useRef<any>();
  const [isRequesting, setIsRequesting] = React.useState(false);
  const formDataRef = React.useRef<any>({});
  // const [editing, setEditing] = React.useState(false);
  const [movieData, setMovieData] = React.useState<any>({});

  const [mecJSON, setMECJSON] = React.useState<any>({});

  const mecCxtValue = React.useMemo(() => ({ mecJSON, setMECJSON }), [mecJSON, movieData]);

  const [mmcJSON, setMMCJSON] = React.useState<any>({});
  const mmcCxtValue = React.useMemo(() => ({ mmcJSON, setMMCJSON }), [movieData]);

  React.useEffect(()=>{
    if(id){
      getMovieDetail(id).then((res:any)=>{
        console.log(res.data);
        formDataRef.current = res.data;
        setMovieData(res.data);
      }).catch((err)=>console.log);
    }
  }, [id]);

  

  const handleSubmit = () => {
    const payload:any = {};
    if(formDataRef.current){
      if(formDataRef.current.title){
        payload.title = formDataRef.current.title;
      }else{
        if(formRef.current) formRef.current.submit();
        return;
      }
    }

    if(MECFormRef.current){
      payload.mec = MECFormRef.current.getFormData();
    }

    console.log('payload.mec ==>', payload.mec);

    return;

    if(MMCFormRef.current){
      payload.mmc = MMCFormRef.current.getFormData();
    }
    if(payload.title && payload.mmc && payload.mec){
      setIsRequesting(true);
      1
      if(movieData.id){
        updateMovie(movieData.id, payload).then((res:any)=>{
          setIsRequesting(false);
          // location.href = '/';
        }).catch(err=>{
          setIsRequesting(false);
          console.log(err);
        });
      }else{
        createNewMovie(payload).then((res:any)=>{
          location.href = '/';
          setIsRequesting(false);
        }).catch(err=>{
          setIsRequesting(false);
          console.log(err);
        });
      }

    }
  }

  const onChangeForm = (e:any) => {
    console.log('onChangeForm ==>');
    formDataRef.current = { ...formDataRef.current, [e.target.name]:e.target.value }
    MECFormRef.current.setMovieTitle(e.target.value);
  }

  return (
    <Box sx = {{ pt:'20px' }}>
      <Box sx = {{ mb:'8px', display:'flex' }}>
        <Link href='/' underline="none">
          <Button  variant='outlined'>Back</Button>
        </Link>
      </Box>
      <Box>
        <Box sx = {{ mb:'20px', mt:'20px' }}>
          <ValidatorForm
            ref = {formRef}
            autoComplete="off"
            onChange = {onChangeForm}
            onSubmit = {()=>{
              return false;
            }}
          >
            <Typography variant='h5'>{(id)?'Update':'New Movie'}</Typography>
            <br/>
            <CustomTextValidator 
              formData = {formDataRef.current} 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name="title" 
              label="Movie Title *" />
          </ValidatorForm>
        </Box>
        <Divider />
        <Box sx={{ width: '100%', mt:'20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MECContext.Provider value={mecCxtValue}>
                <MECForm ref = {MECFormRef} data = {movieData.mec} />
              </MECContext.Provider>
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <MMCContext.Provider value={mmcCxtValue}>
                <MMCForm ref = {MMCFormRef} data = {movieData.mmc} />
              </MMCContext.Provider>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Button onClick={handleSubmit} variant="outlined" disabled = {isRequesting}>Submit</Button>
      </Box>
    </Box>
  );
}
