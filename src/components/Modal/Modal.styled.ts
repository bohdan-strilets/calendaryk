import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const Backdrop = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	background-color: rgba(0, 0, 0, 0.5);
`

export const Wrapper = styled(motion.div)`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 90%;
	max-height: 90%;
	overflow-y: auto;

	border-radius: 8px;
	background-color: var(--white-color);
	box-shadow: var(--box-shadow);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 660px;
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		width: 780px;
	}
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 10px;

	border-bottom: 3px solid var(--red-color);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		padding: 30px;
	}
`

export const Title = styled.p`
	font-family: var(--second-font);
	font-size: 22px;
	font-weight: 700;

	width: 90%;
	color: var(--gray-color);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 32px;
	}
`

export const Content = styled.div`
	padding: 10px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		padding: 30px;
	}
`

export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	padding: 10px;
	border-top: 3px solid var(--gray-color);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		padding: 30px;
	}
`
