import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper, CircularProgress } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import AxiosInstance from './axios';

const Delete = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    AxiosInstance.get(`recipe/${id}/`)
      .then((res) => {
        setRecipe(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    AxiosInstance.delete(`recipe/${id}/`)
      .then(() => {
        navigate('/'); // Redirect to the homepage or list after deletion
      })
      .catch((error) => {
        console.error('Error deleting recipe:', error.response?.data || error.message);
      });
  };

  if (loading) return <CircularProgress />;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Confirm Deletion of Recipe
      </Typography>
      <Paper elevation={3} sx={{ padding: '20px', width: '80%', maxWidth: '600px', margin: '10px' }}>
        <Typography variant="h5" component="div" sx={{fontWeight: 'bold'}}>
          {recipe?.name}
        </Typography>
        <Typography variant="subtitle1" component="div" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
          Ingredients:
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '15px' }}>
          {recipe?.ingredients}
        </Typography>
        <Typography variant="subtitle1" component="div" sx={{fontWeight: 'bold'}}>
          Instructions:
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
          {recipe?.instructions}
        </Typography>
      </Paper>

      <Button variant="contained" color="error" onClick={handleDelete} sx={{ marginTop: '20px' }}>
        Confirm Delete
      </Button>
    </Box>
  );
}

export default Delete;
