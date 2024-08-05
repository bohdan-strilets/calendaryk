import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { DayCellProps } from '@/types/props/calendars/MonthProps'

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

	border-radius: ${({ borderRadius }) => (borderRadius ? '3px' : '')};

	background-color: ${({ background, currentDay }) => {
		if (background) {
			return background
		}
		if (currentDay) {
			return 'var(--green-color)'
		}
		return ''
	}};

	color: ${({ color, currentDay }) => {
		if (color) {
			return color
		}
		if (currentDay) {
			return 'var(--white-color)'
		}
		return 'var(--gray-color)'
	}};
`
