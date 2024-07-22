import styled from '@emotion/styled'

import { ButtonProps } from '@/types/props/CloseButtonProps'

export const Button = styled.button<ButtonProps>`
	position: ${({ position }) => (position ? 'absolute' : '')};
	top: ${({ top }) => (top ? top : '')};
	bottom: ${({ bottom }) => (bottom ? bottom : '')};
	left: ${({ left }) => (left ? left : '')};
	right: ${({ right }) => (right ? right : '')};

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 20px;

	outline: none;
	background-color: transparent;
	color: var(--gray-color);

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: var(--red-color);
	}

	:active {
		transform: scale(0.95);
	}
`
