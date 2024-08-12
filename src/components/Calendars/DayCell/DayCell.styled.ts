import styled from '@emotion/styled'

import { DayProps } from '@/types/props/calendars/DayCellProps'

export const Day = styled.li<DayProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: ${({ width }) => (width ? width : '')};
	height: ${({ height }) => (height ? height : '')};

	border-radius: ${({ isBorderRadius }) => (isBorderRadius ? '3px' : '')};

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
