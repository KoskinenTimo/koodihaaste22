import { TextField } from '@mui/material';
import React from 'react';

interface ICustomTextProps {
	children: string;
  value: string;
	// eslint-disable-next-line react/require-default-props
	setInputValue: () => void
}
export const CustomInput = ({
  children,
  value,
  setInputValue,
  ...other
}: ICustomTextProps & any) => (
  <TextField 
    value={value}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder={children}
    {...other}
  />
)