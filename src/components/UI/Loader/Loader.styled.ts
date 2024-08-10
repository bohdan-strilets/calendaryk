import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const swap = keyframes`
  0%, 100% {
    transform: translateX(5px);
    z-index: 1;
  }
  50% {
    transform: translateX(60px);
    z-index: 0;
  }
`

export const Wrapper = styled.div`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;
`

export const Circle = styled.div`
	position: absolute;

	width: 12px;
	height: 12px;

	background-color: var(--red-color);
	border-radius: 3px;

	animation: ${swap} 1s ease-in-out infinite alternate;

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
