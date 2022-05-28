import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';

export const MUIAppBar = ({ children }: any) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
      position="static"
      color='secondary'
      >
        <Toolbar>
            {children}

        </Toolbar>
      </AppBar>
    </Box>
  )
}