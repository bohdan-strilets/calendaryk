import styled from '@emotion/styled'

import { InputProps, WrapperProps } from '@/types/props/ui/TextFieldProps'

export const Wrapper = styled.label<WrapperProps>`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;

	margin: ${({ margin }) => (margin ? margin : '')};
`

export const Label = styled.p`
	font-weight: 600;
`

export const Input = styled.input<InputProps>`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '30px')};
	padding: ${({ padding }) => (padding ? padding : '0 10px')};

	border-bottom: 3px solid transparent;
	border-radius: 3px;
	box-shadow: var(--box-shadow);

	transition: border-bottom-color var(--hover-effect);

	::placeholder {
		color: #d4d4d4;
	}

	:focus {
		border-bottom-color: var(--green-color);
	}
`

export const Required = styled.span`
	color: var(--red-color);
	font-size: 20px;
`

export const Error = styled.p`
	font-weight: 600;
	margin-top: 5px;
	color: var(--red-color);
`
