import styled from 'styled-components'
import { CustomText } from './CustomText';


export const HeaderLink = styled(CustomText)<{ active?: boolean }>`
	text-decoration: none;
	align-items: center;
	cursor: default;
	&:hover {
		background-color: #00FFFF;
	}
	&:before {
		content: '';
		width: 8px;
		height: 8px;
		background-color: transparent;
		display: inline-block;
		border-radius: 100%;
	}
	${(props) => 
		props.active &&
		`
			
		`
	}
`;

export const HeaderText = styled(CustomText)``