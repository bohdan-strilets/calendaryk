import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: 20px 0;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		margin: 30px 0;
	}
`

export const Item = styled(motion.li)`
	width: 28%;
	height: 70px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 33%;
		height: 100px;
	}
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 18px;

	width: 100%;
	height: 100%;

	color: var(--white-color);
	background-color: var(--gray-color);
	border-radius: 5px;
	box-shadow: var(--box-shadow);

	cursor: pointer;
	transition:
		background-color var(--hover-effect),
		color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--green-color);
		color: var(--black-color);
	}

	:active {
		transform: scale(0.995);
	}

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 30px;
	}
`
