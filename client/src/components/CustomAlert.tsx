import React from 'react';
import { Alert } from '@mui/material';

type CustomErrorProps = {
  error?: string;
}

export const CustomError = ({
  error="There was an error",
}: CustomErrorProps) => (
  <Alert
    severity='error'
    style={{ 
      position:'absolute',
      left: 'auto',
      top: '62px',
      zIndex: 20, 
      width:'86.5%', 
      maxWidth: '369px'
    }}
  >
    {error}
  </Alert>
)