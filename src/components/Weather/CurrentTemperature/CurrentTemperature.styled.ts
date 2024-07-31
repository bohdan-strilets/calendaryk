import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 30%;
	height: 100%;

	background-color: #050505;
	border-top-right-radius: 5px;
`

export const TemperatureDisplay = styled.p`
	position: relative;

	font-size: 120px;
	font-weight: 700;
	line-height: 1;

	margin-bottom: 15px;
`

export const TemperatureSymbol = styled.span`
	position: absolute;
	top: 8%;
	right: -18%;
	font-size: 30px;
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
