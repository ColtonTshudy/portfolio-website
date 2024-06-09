// NotFound.js
import React from 'react';
import { Paper, Typography, Container, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, textAlign: 'center', my: 5 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Hello!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          This page is under construction.
        </Typography>
        <Typography variant="body1">
          Come back soon!
        </Typography>
      </Paper>
    </Container>
  );
};

export default NotFound;