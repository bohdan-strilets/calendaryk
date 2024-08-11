import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const LeftSide = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 670px;

	background: var(--green-gradient);

	border-radius: 5px;
	color: var(--white-color);

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		width: 50%;
	}
`

export const Greetings = styled.p`
	font-family: var(--second-font);
	font-size: 48px;
	font-weight: 700;
	line-height: 1.3;

	color: var(--black-color);
`

export const Accent = styled.p`
	font-family: var(--second-font);
	font-size: 48px;
	line-height: 1.3;

	margin-bottom: 20px;
	color: var(--white-color);
`

export const Text = styled.p`
	margin-bottom: 10px;
`

export const RightSide = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 670px;

	background-color: var(--white-color);

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		width: 50%;
	}
`
