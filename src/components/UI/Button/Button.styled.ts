import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/ButtonProps'

export const Wrapper = styled.button<WrapperProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	text-transform: uppercase;
	font-weight: 600;

	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '40px')};
	margin: ${({ margin }) => (margin ? margin : '')};
	padding: 5px;

	background-color: var(--red-color);
	color: var(--white-color);
	border-radius: 5px;
	text-shadow: var(--text-shadow);

	box-shadow: ${({ height }) => {
		const heightToNumber = Number.parseInt(height ?? '')
		const insetShadowHeight = heightToNumber / 2

		if (insetShadowHeight > 0) {
			return `var(--box-shadow), inset 0px ${insetShadowHeight}px 0px rgba(255, 255, 255, 0.1);`
		}

		return `var(--box-shadow), inset 0px 25px 0px rgba(255, 255, 255, 0.1);`
	}};

	cursor: pointer;
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--black-color);
	}

	:active {
		transform: scale(0.99);
	}

	:disabled {
		background-color: var(--gray-color);
		pointer-events: none;
	}
`
