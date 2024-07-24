import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/screenWidth'

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;
`

export const Wrapper = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	overflow: auto;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 400px;
	height: 100vh;
	padding: 15px;

	background-color: var(--black-color);

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		width: 430px;
		padding: 25px;
	}
`

export const Copyright = styled.p`
	text-align: center;
	text-transform: lowercase;
	font-weight: 600;

	color: var(--white-color);
	margin-top: 30px;
`
