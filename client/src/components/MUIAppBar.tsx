import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MUIAppBar = ({ children }: any) => {
  return (
    <Box sx={{ flexGrow: 1, height: '5em' }}>
      <AppBar
      position="static"
      color='secondary'
      style={{ height: '60px' }}
      >
        <Toolbar>
            {children}
        </Toolbar>
      </AppBar>
    </Box>
  )
}