import styled from '@emotion/styled'

import { StyledTagProps } from '@/types/props/ui/TitleProps'

export const StyledTag = styled.h1<StyledTagProps>`
	font-family: var(--second-font);
	font-weight: 900;
	font-size: ${({ fontSize }) => `${fontSize}px`};
	text-transform: uppercase;
	text-align: ${({ textAlign }) => textAlign};

	margin: ${({ margin }) => (margin ? margin : '')};

	color: ${({ variant }) => {
		if (variant === 'gray') {
			return 'var(--gray-color)'
		}
		if (variant === 'black') {
			return 'var(--black-color)'
		}
		if (variant === 'green') {
			return 'var(--green-color)'
		}
		if (variant === 'red') {
			return 'var(--red-color)'
		}
	}};
`
