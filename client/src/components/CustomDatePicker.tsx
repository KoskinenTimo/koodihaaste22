/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { TextField } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers'


type CustomDatePickedProps = {
  chosenDate: Date,
  handleChange: () => void,
  titleMessage: string
}

export const CustomDatePicker = ({
  chosenDate,
  handleChange,
  titleMessage,
  ...other
}: CustomDatePickedProps & any) => (
  <MobileDatePicker
    label={titleMessage}
    inputFormat="DD/MM/YYYY"
    value={chosenDate}
    onChange={handleChange}
    renderInput={(params) => <TextField {...params} />}
    {...other}
  />
)