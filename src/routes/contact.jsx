import { Box, Divider, Paper, Typography, styled } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <Paper elevation={5} sx={{ p: 3, textAlign: 'left', m: 5, }}>
      <Typography variant="h3" gutterBottom>
        Contact
      </Typography>
      <Divider/>
      <Typography variant="h5" sx={{fontStyle:'italic', my:2}}>
        coltondtshudy@gmail.com
      </Typography>
      <Typography variant="h5" sx={{fontStyle:'italic', my:2}}>
        (804)-405-9861
      </Typography>
    </Paper>
  );
};

export default Contact;