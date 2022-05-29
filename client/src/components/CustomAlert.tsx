import { Alert } from '@mui/material';
import React from 'react';
type CustomErrorProps = {
  error?: string;
}

export const CustomError = ({
  error="There was an error",
}) => (
  <Alert
    severity='error'
    style={{ 
      position:'absolute',
      left: 0,
      top: '60px',
      zIndex: 20, 
      width:'100%', 
      maxWidth: '800px'
    }}
  >
    {error}
  </Alert>
)