import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#13274F' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
          Baseball Data Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ color: 'white' }}>
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
