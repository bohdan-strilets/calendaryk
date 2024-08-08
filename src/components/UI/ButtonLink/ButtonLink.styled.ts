import styled from '@emotion/styled'

import { ButtonProps } from '@/types/props/ui/ButtonLinkProps'

export const Button = styled.button<ButtonProps>`
	text-decoration: underline;
	text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};

	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '100%')};
	margin: ${({ margin }) => (margin ? margin : '')};

	color: ${({ variant }) => {
		if (variant === 'gray') {
			return 'var(--gray-color)'
		}
		if (variant === 'red') {
			return 'var(--red-color)'
		}
		return 'var(--green-color)'
	}};

	background-color: transparent;
	outline: none;

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${({ variant }) =>
			variant === 'gray' ? 'var(--red-color)' : 'var(--gray-color)'};
	}
`
