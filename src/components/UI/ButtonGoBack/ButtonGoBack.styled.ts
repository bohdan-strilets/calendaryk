import styled from '@emotion/styled'
import { IoMdArrowRoundBack } from 'react-icons/io'

import { ButtonProps } from '@/types/props/ui/ButtonGoBackProps'

export const Button = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	margin: ${({ margin }) => (margin ? margin : '')};

	background-color: transparent;

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: var(--red-color);
	}

	:active .icon {
		transform: translateX(-5px);
	}
`

export const Label = styled.span`
	margin-left: 8px;

	::first-letter {
		text-transform: uppercase;
	}
`

export const Icon = styled(IoMdArrowRoundBack)`
	transition: transform var(--hover-effect);
`
