import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 40px 0;
	margin: 15px 0;

	background-color: #050505;
	border-top-right-radius: 5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 40%;
		height: 100%;
		padding: 0;
		margin: 0;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		width: 30%;
	}
`

export const TemperatureDisplay = styled.p`
	position: relative;

	font-size: 45px;
	font-weight: 700;
	line-height: 1;

	margin-bottom: 15px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 76px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		font-size: 120px;
	}
`

export const TemperatureSymbol = styled.span`
	position: absolute;
	top: 8%;
	right: -38%;
	font-size: 20px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		right: -32%;
		font-size: 30px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		right: -18%;
	}
`

export const TemperatureRangeWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const TemperatureRange = styled.div<{ margin?: string }>`
	display: flex;
	align-items: center;
	justify-content: center;

	margin: ${({ margin }) => (margin ? margin : '')};
`

export const TemperatureLabel = styled.p`
	font-size: 14px;
	margin-left: 5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 18px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		font-size: 20px;
	}
`
