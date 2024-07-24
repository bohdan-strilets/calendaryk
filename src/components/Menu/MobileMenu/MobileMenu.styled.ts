import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/screenWidth'

export const Wrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	overflow-y: scroll;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 100%;
	height: 100vh;
	padding: 15px;

	background-color: var(--black-color);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		padding: 35px;
	}
`

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`
