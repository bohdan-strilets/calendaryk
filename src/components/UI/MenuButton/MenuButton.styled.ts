import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/screenWidth'

export const Button = styled.button`
	background-color: transparent;
	outline: none;

	cursor: pointer;

	:hover div,
	:focus div {
		background-color: var(--black-color);
	}
`

export const Line = styled(motion.div)`
	width: 28px;
	height: 3px;
	margin-bottom: 5px;

	background-color: #dc281e;
	border-radius: 5px;

	transition: background-color var(--hover-effect);

	:last-child {
		margin-bottom: 0;
	}

	:nth-of-type(odd) {
		background-color: var(--red-color);
	}

	@media screen and (min-width: ${screenWidth.tablet}) {
		width: 33px;
		margin-bottom: 6px;
	}

	@media screen and (min-width: ${screenWidth.desktop}) {
		width: 38px;
		height: 5px;
	}
`
