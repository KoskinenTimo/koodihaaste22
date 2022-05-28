import { MenuItem } from '@mui/material'
import React from 'react'

export type CustomMenuItemProps = {
  children: any;
  handleClose: () => void;
}
export const CustomMenuItem = ({
  children,
  handleClose
}: CustomMenuItemProps) =>  (
  <MenuItem onClick={handleClose}>
    {children}
  </MenuItem>
)
