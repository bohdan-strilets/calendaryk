import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const DayInfo = styled(motion.li)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 40px;
	padding: 15px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 150px;
		padding: 55px 35px;
	}
`

export const DayName = styled.p`
	text-transform: uppercase;
	font-weight: 200;
	font-size: 12px;

	margin-bottom: 15px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 16px;
	}
`

export const IconWrapper = styled.div`
	font-size: 20px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 36px;
	}
`

export const TemperatureLabel = styled.p`
	font-size: 12px;
	color: var(--gray-color);
	margin-top: 15px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 16px;
	}
`
