import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { IPaintFormText } from '../../types/generic';

const PaintFormText:React.FC<IPaintFormText> = ({onChange, label, value}) => {
  return <TextField
  label={label}
  size="small"
  sx={{ m: 1, width: "14ch", height: "ch" }}
  value={value}
  InputProps={{
    endAdornment: <InputAdornment position="end">cm</InputAdornment>,
  }}
  onChange={onChange}
/>;
}

export default PaintFormText;