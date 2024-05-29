// NotFound.js
import React from 'react';
import { Paper, Typography, Container } from '@mui/material';

const NotFound = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, textAlign: 'center', my: 5 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1">
          The page you are looking for does not exist.
        </Typography>
      </Paper>
    </Container>
  );
};

export default NotFound;