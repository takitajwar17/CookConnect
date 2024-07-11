import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          About CookConnect
        </Typography>
        <Typography variant="body1" paragraph>
          CookConnect is a web application designed for food enthusiasts to discover, share, and manage their favorite recipes. The platform features a user-friendly interface built with React.js and a robust backend powered by Django. It is deployed on AWS for scalability and reliability.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Tech Stack
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Frontend:</strong> React.js, HTML, CSS, Material-UI<br/>
          <strong>Backend:</strong> Django, Django REST Framework<br/>
          <strong>Database:</strong> PostgreSQL<br/>
          <strong>Deployment:</strong> AWS S3, AWS EC2, AWS CloudFront, Custom VPC
        </Typography>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>Recipe List: View a list of all recipes with basic information.</li>
            <li>Recipe Detail: Detailed view of selected recipes, including ingredients, steps, and user comments.</li>
            <li>Add Recipe: Form to add new recipes with title, ingredients, steps, category, and photo upload.</li>
            <li>Recipe Search: Search for recipes by name, category, or ingredients.</li>
          </ul>
        </Typography>
        <Typography variant="h4" gutterBottom>
          API Endpoints
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>GET /recipe: Fetch all recipes.</li>
            <li>POST /recipe: Add a new recipe.</li>
            <li>GET /recipe/{'{id}'}: Fetch details of a specific recipe.</li>
            <li>PUT /recipe/{'{id}'}: Update a specific recipe.</li>
            <li>DELETE /recipe/{'{id}'}: Delete a specific recipe.</li>
          </ul>
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          CookConnect is a React.js and Django-based web app for discovering, sharing, and managing recipes, deployed on AWS. It leverages AWS S3 for storage, EC2 for hosting, CloudFront for content delivery, a custom VPC for networking, and PostgreSQL as the database. Built using Django REST Framework and React Vite.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
