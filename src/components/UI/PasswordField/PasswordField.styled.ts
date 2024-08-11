import styled from '@emotion/styled'

import { ButtonProps } from '@/types/props/ui/PasswordFieldProps'

export const Wrapper = styled.div`
	position: relative;
`

export const Button = styled.button<ButtonProps>`
	position: absolute;
	right: 2%;
	bottom: ${({ label, isError }) => {
		if (label && !isError) {
			return '19%'
		}
		if (label && isError) {
			return '42%'
		}
		if (!label && !isError) {
			return '32%'
		}
		if (!label && isError) {
			return '57%'
		}
	}};

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 18px;
	line-height: 1;

	color: var(--black-color);
	background-color: transparent;
	outline: none;

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: var(--green-color);
	}
`
