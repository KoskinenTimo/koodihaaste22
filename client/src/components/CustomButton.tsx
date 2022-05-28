import { Button } from '@mui/material';
import React from 'react';


interface ICustomTextProps {
	children: string;
  variant: "text" | "contained" | "outlined";
	// eslint-disable-next-line react/require-default-props
	handleClick: () => void;
  color: string;
}
export const CustomButton = ({
  children,
  variant="contained",
  handleClick,
  ...other
}: ICustomTextProps & any) => (
  <Button
    variant={variant}
    onClick={() => handleClick()}
    {...other}
  >
    {children}
  </Button>
)