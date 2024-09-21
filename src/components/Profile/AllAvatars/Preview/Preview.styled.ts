import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
	position: relative;
`

export const Button = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 40px;
	height: 40px;

	background-color: var(--gray-color);
	color: var(--white-color);

	cursor: pointer;
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--green-color);
	}

	:active {
		transform: scale(0.95);
	}
`
