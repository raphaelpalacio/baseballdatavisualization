import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="h6" className="header-title">
          Baseball Data Dashboard
        </Typography>
        <Button className="header-button" component={Link} to="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
