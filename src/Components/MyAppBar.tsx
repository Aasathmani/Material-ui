import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const MyAppBar= () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
