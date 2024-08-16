import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { CircleProps, WrapperProps } from '@/types/props/ui/LoaderProps'

const swap = keyframes`
  0%, 100% {
    transform: translateX(3px);
    z-index: 1;
  }
  50% {
    transform: translateX(-40px);
    z-index: 0;
  }
  75% {
    transform: translateX(40px);
    z-index: 0;
  }
`

export const Wrapper = styled.div<WrapperProps>`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;
	margin: ${({ margin }) => (margin ? margin : '')};
`

export const Circle = styled.div<CircleProps>`
	position: absolute;

	width: ${({ size }) => (size ? `${size}px` : '8px')};
	height: ${({ size }) => (size ? `${size}px` : '8px')};

	background-color: var(--red-color);
	border-radius: 2px;

	animation: ${swap} 2s ease-in-out infinite alternate;

	&:nth-of-type(1) {
		animation-delay: -0.2s;
	}

	&:nth-of-type(2) {
		animation-delay: -0.5s;
	}

	&:nth-of-type(3) {
		animation-delay: 0.7s;
	}
`
