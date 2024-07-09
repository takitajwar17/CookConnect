import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function MyMultilineField(props) {
  const { label, placeholder, name, control, rows, width, rules } = props; 
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
          multiline
          rows={rows}
          variant="outlined"
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
