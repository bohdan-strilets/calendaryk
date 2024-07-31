import styled from '@emotion/styled'
import { motion } from 'framer-motion'

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

	width: 150px;
	padding: 55px 35px;
`

export const DayLabel = styled.p`
	text-transform: uppercase;
	font-weight: 200;

	margin-bottom: 15px;
`

export const DayLabelTemp = styled.p`
	color: var(--gray-color);
	margin-top: 15px;
`
