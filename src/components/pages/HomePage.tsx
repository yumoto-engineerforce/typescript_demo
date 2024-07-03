import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HomePage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      <Button
        component={RouterLink}
        to="/signup"
        variant="contained"
        color="primary"
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default HomePage;
