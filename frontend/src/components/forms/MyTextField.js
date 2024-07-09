import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function MyTextField(props) {
  const { label, placeholder, name, control, width, rules } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules} 
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          sx={{ width: width }}
          label={label}
          variant="standard"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={!!error} 
          helperText={error ? error.message : null} 
        />
      )}
    />
  );
}
