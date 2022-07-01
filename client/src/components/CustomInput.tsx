/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@mui/material';
import React from 'react';

interface ICustomTextProps {
	children: string;
  value: string;
  id: string;
	// eslint-disable-next-line react/require-default-props
	setInputValue: () => void
}
export const CustomInput = ({
  children,
  value,
  setInputValue,
  id,
  ...other
}: ICustomTextProps & any) => (
  <TextField 
    id={id}
    value={value}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder={children}
    {...other}
  />
)