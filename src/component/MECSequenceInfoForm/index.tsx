import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';

interface Props extends FormType {
    data:any;
}

export default function({ data, parentKey }:Props){

  const [formData, setFormData] = useState({});

  return (<>
    <Typography >SequenceInfo</Typography>
    <Box sx = {{ pl:4 }}>
      <TextValidator
        name = {`${parentKey}.SequenceInfo.Number`} 
        label = "Number *" 
        validators={['required']}
        errorMessages={['this field is required']} />
    </Box>
  </>)
}