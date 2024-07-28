import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { DayCellProps } from '@/types/props/MonthProps'

export const Week = styled(motion.ul)`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const DayCell = styled.li<DayCellProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: ${({ cellWidth }) => (cellWidth ? cellWidth : '')};
	height: ${({ cellHeight }) => (cellHeight ? cellHeight : '')};

	border-radius: 3px;
	background: ${({ currentDay }) => (currentDay ? 'var(--green-color)' : '')};
	color: ${({ currentDay }) =>
		currentDay ? 'var(--white-color)' : ' var(--gray-color)'};
`
