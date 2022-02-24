import React from 'react';
import { Box, MenuItem, TextField, Typography  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { SelectValidator } from 'react-material-ui-form-validator';
import { FormType, InventoryType } from 'utils/types';
import MMCContext from 'context/MMCContext';
import languages from 'config/languages.json';
import _ from 'lodash';

interface Props extends FormType {
 data:InventoryType
}
export default function({ parentKey, data }:Props){
  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext);
  return (
    <Box>
      <Typography >Video</Typography>
      <Box sx = {{ pl:4 }}>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Video.@VideoTrackID`} 
          label="@VideoTrackID *"/><br/>

        <SelectValidator 
          name={`${parentKey}.Video.Type`} 
          label="Type *"
          onChange = {(e:any) => {
            _.set(mmcJSON, e.target.name, e.target.value);
            setMMCJSON({ ...mmcJSON });
          }}
        >
          <MenuItem value="primary">Primary</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </SelectValidator>
        <br/>

        <SelectValidator
          defaultValue = "en-US"
          name={`${parentKey}.Video.Language`} 
          onChange = {(e:any) => {
            _.set(mmcJSON, e.target.name, e.target.value);
            setMMCJSON({ ...mmcJSON });
          }}
          label="@Language *"
        >
          { languages.map((ele:any, index:number)=><MenuItem key={index} value={ele.code}>{ele.language}</MenuItem>) }
        </SelectValidator>

        <Typography >Picture</Typography>
        <Box sx = {{ pl:4 }}>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name={`${parentKey}.Video.Picture.AspectRatio`} 
            label="AspectRatio *"/><br/>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name={`${parentKey}.Video.Picture.WidthPixels`} 
            label="WidthPixels *"/><br/>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name={`${parentKey}.Video.Picture.HeightPixels`} 
            label="HeightPixels *"/><br/>


          <Typography >MasteredColorVolume</Typography>
          <Box sx = {{ pl:4 }}>

            <Typography >PrimaryRChromaticity</Typography>
            <Box sx = {{ pl:4 }}>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name={`${parentKey}.Video.Picture.MasteredColorVolume.PrimaryRChromaticity.ChromaticityCIEx`} 
                label="ChromaticityCIEx *"/><br/>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name={`${parentKey}.Video.Picture.MasteredColorVolume.PrimaryRChromaticity.ChromaticityCIEy`} 
                label="ChromaticityCIEy *"/><br/>
            </Box>

            <Typography >PrimaryGChromaticity</Typography>
            <Box sx = {{ pl:4 }}>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name={`${parentKey}.Video.Picture.MasteredColorVolume.PrimaryGChromaticity.ChromaticityCIEx`} 
                label="ChromaticityCIEx *"/><br/>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name={`${parentKey}.Video.Picture.MasteredColorVolume.PrimaryGChromaticity.ChromaticityCIEy`} 
                label="ChromaticityCIEy *"/><br/>
            </Box>

            <Typography >PrimaryBChromaticity</Typography>
            <Box sx = {{ pl:4 }}>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name={`${parentKey}.Video.Picture.MasteredColorVolume.PrimaryBChromaticity.ChromaticityCIEx`} 
                label="ChromaticityCIEx *"/><br/>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name={`${parentKey}.Video.Picture.MasteredColorVolume.PrimaryBChromaticity.ChromaticityCIEy`} 
                label="ChromaticityCIEy *"/><br/>
            </Box>

            <Typography >WhitePointChromaticity</Typography>
            <Box sx = {{ pl:4 }}>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name={`${parentKey}.Video.Picture.MasteredColorVolume.WhitePointChromaticity.ChromaticityCIEx`} 
                label="ChromaticityCIEx *"/><br/>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name={`${parentKey}.Video.Picture.MasteredColorVolume.WhitePointChromaticity.ChromaticityCIEy`} 
                label="ChromaticityCIEy *"/><br/>
            </Box>

            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name={`${parentKey}.Video.Picture.MasteredColorVolume.LuminanceMin`} 
              label="LuminanceMin *"/><br/>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name={`${parentKey}.Video.Picture.MasteredColorVolume.LuminanceMax`} 
              label="LuminanceMax *"/><br/>

          </Box>

          <Typography >LightLevel</Typography>
          <Box sx = {{ pl:4 }}>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name={`${parentKey}.Video.Picture.LightLevel.ContentMax`} 
              label="ContentMax *"/><br/>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name={`${parentKey}.Video.Picture.LightLevel.FrameAverageMax`} 
              label="FrameAverageMax *"/><br/>
          </Box>

        </Box>

        

        <Typography >ContainerReference</Typography>
        <Box sx = {{ pl:4 }}>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name={`${parentKey}.Video.ContainerReference.ContainerLocation`} 
            label="ContainerLocation *"/><br/>
        </Box>

      </Box>
        
      <Typography >Audio</Typography>
      <Box sx = {{ pl:4 }}>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Audio.@AudioTrackID`} 
          label="@AudioTrackID *"/><br/>
        <SelectValidator 
          name={`${parentKey}.Audio.Type`} 
          onChange = {(e:any) => {
            _.set(mmcJSON, e.target.name, e.target.value);
            setMMCJSON({ ...mmcJSON });
          }}
          label="Type *">
          <MenuItem value="primary">Primary</MenuItem>
          <MenuItem value="narration ">Narration</MenuItem>
          <MenuItem value="dialog centric">Dialog centric</MenuItem>
          <MenuItem value="commentary">Commentary</MenuItem>
        </SelectValidator>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Audio.Language`} 
          label="Language *"/><br/>
        <Typography >ContainerReference</Typography>
        <Box sx = {{ pl:4 }}>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name={`${parentKey}.Audio.ContainerReference.ContainerLocation`} 
            label="ContainerLocation *"/><br/>
        </Box>
      </Box>

      <Typography >Subtitle</Typography>
      <Box sx = {{ pl:4 }}>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Subtitle.@SubtitleTrackID`} 
          label="@SubtitleTrackID *"/><br/>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Subtitle.Format`} 
          label="Format *"/><br/>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Subtitle.Type`} 
          label="Type *"/><br/>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Subtitle.Language`} 
          label="Language *"/><br/>

        <Typography >Encoding</Typography>
        <Box sx = {{ pl:4 }}>
          <Typography >FrameRate</Typography>
          <Box sx = {{ pl:4 }}>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name={`${parentKey}.Subtitle.Encoding.FrameRate.@multiplier`} 
              label="multiplier "/><br/>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name={`${parentKey}.Subtitle.Encoding.FrameRate.@timecode`} 
              label="timecode "/><br/>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name={`${parentKey}.Subtitle.Encoding.FrameRate.value`} 
              label="FrameRate *"/><br/>
          </Box>
        </Box>

        <Typography >ContainerReference</Typography>
        <Box sx = {{ pl:4 }}>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name={`${parentKey}.Subtitle.ContainerReference.ContainerLocation`} 
            label="ContainerLocation *"/><br/>
        </Box>
      </Box>
    </Box>
  )
}