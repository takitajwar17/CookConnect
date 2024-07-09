import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import MyTextField from './forms/MyTextField';
import MyMultilineField from './forms/MyMultilineField';
import { useForm } from 'react-hook-form';
import AxiosInstance from './axios';
import {useNavigate} from 'react-router-dom';

const Create = () => {

  const navigate = useNavigate();
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      ingredients: '',
      instructions: ''
    }
  });

  const submission = (data) => {
    reset({
      name: '',
      ingredients: '',
      instructions: ''
    });
    AxiosInstance.post('recipe/', {
      name: data.name,
      ingredients: data.ingredients,
      instructions: data.instructions
    }).then((res) => { 
      navigate('/');
    });
  }
  

  const validateLength = (minLength, field) => value => value.length >= minLength || `${field} must be at least ${minLength} characters`;

  return (
    <form onSubmit={handleSubmit(submission)}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginBottom: '10px',
          padding: '30px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '83%',
            backgroundColor: '#3b5573',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <Typography sx={{ color: '#fff', marginLeft: '20px', fontSize: '20px' }}>
            Create Recipe
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '80%',
            boxShadow: 3,
            padding: 4,
            flexDirection: 'column',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <MyTextField
                  name="name"
                  label="Name"
                  placeholder="Enter Recipe Title"
                  control={control}
                  rules={{ validate: validateLength(10, 'name') }}
                  width="100%"
                />
                <MyMultilineField
                  name="ingredients"
                  label="Ingredients"
                  placeholder="Add Ingredients"
                  control={control}
                  rows={8}
                  width="100%"
                  rules={{ validate: validateLength(30, 'ingredients') }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <MyMultilineField
                name="instructions"
                label="Instructions"
                placeholder="Write Detailed Instructions Here"
                control={control}
                rows={11}
                width="100%"
                rules={{ validate: validateLength(70, 'instructions') }}
              />
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'right',
                  marginTop: '20px',
                  paddingRight: '20px',
                }}
              >
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </form>
  );
}

export default Create;
