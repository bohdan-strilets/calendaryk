import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const beat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 35px;
	height: 35px;

	background-color: var(--green-color);
	border-radius: 3px;
	box-shadow: inset 0px 25px 0px rgba(255, 255, 255, 0.2);

	animation: ${beat} 1s infinite;
`

export const Label = styled.span`
	font-family: var(--second-font);
	font-size: 20px;
	font-weight: 500;
	line-height: 0;

	color: var(--black-color);
`
