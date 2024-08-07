import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/todoList/PriorityProps'
import { screenWidth } from '@/utils/data/screenWidth'

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
  }
`

export const Wrapper = styled.div<WrapperProps>`
	display: inline-block;
	padding: 7px 20px 4px 20px;

	border-radius: 3px;
	box-shadow: inset 0px 15px 0px rgba(255, 255, 255, 0.1);
	background-color: ${({ priority }) => {
		if (priority === 'low') {
			return '#19b32e'
		}
		if (priority === 'medium') {
			return '#d07b14'
		}
		if (priority === 'high') {
			return '#d01414'
		}
	}};

	animation: ${({ priority }) =>
		priority === 'high' &&
		css`
			${pulse} 1.3s infinite
		`};

	@media screen and (min-width: ${screenWidth.TABLET}) {
		padding-left: 10px;
		padding-right: 10px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		width: 10%;
		padding-left: 20px;
		padding-right: 20px;
	}
`

export const Label = styled.p`
	line-height: 1;
	text-transform: uppercase;
	font-weight: 500;
	font-size: 14px;
	text-align: center;

	width: 100%;
	height: 100%;

	color: var(--white-color);
`
