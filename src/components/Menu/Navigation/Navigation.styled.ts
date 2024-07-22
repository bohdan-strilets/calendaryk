import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { ListProps } from '@/types/props/NavigationProps'

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(6px);
  }
  60% {
    transform: translateX(3px);
  }
`

export const List = styled.ul<ListProps>`
	margin: ${({ margin }) => (margin ? margin : '')};
`

export const Item = styled(motion.li)`
	border-bottom: 1px solid var(--gray-color);

	:last-child {
		margin-bottom: 0;
		border-bottom: none;
	}
`

export const Button = styled.button`
	display: flex;
	align-items: center;

	width: 100%;
	height: 50px;
	padding: 0 10px;

	outline: none;
	background-color: transparent;
	color: var(--white-color);

	cursor: pointer;
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--gray-color);
	}

	:hover svg,
	:focus svg {
		animation: ${bounce} 1s ease;
	}

	:active {
		transform: scale(0.99);
	}
`

export const Label = styled.span`
	text-shadow: var(--text-shadow);
	font-weight: 500;
	margin-left: 20px;
`
