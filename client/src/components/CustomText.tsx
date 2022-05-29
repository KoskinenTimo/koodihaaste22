import { Typography } from '@mui/material';
import React from 'react';

interface ICustomTextProps {
	children: string;
	// eslint-disable-next-line react/require-default-props
	size?: any;
	element?: any;
	color?: string;
}

export const CustomText = ({
	children,
	size,
	element,
	...other
}: ICustomTextProps & any) => (
	<Typography variant={size || 'p'} component={element || 'div'} {...other}>
		{children}
	</Typography>
);