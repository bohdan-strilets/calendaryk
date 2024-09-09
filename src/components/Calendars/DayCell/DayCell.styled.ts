import styled from '@emotion/styled'

import { DayProps } from '@/types/props/calendars/DayCellProps'

export const Day = styled.li<DayProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: ${({ width }) => (width ? width : '')};
	height: ${({ height }) => (height ? height : '')};

	border-radius: ${({ isBorderRadius }) => (isBorderRadius ? '3px' : '')};

	background-color: ${({ background, currentDay, selectedDay }) => {
		if (background) {
			return background
		}
		if (currentDay || selectedDay) {
			return 'var(--green-color)'
		}
		return ''
	}};

	color: ${({ color, currentDay, selectedDay }) => {
		if (color) {
			return color
		}
		if (currentDay || selectedDay) {
			return 'var(--white-color)'
		}
		return 'var(--gray-color)'
	}};

	cursor: ${({ isInteractive }) => (isInteractive ? 'pointer' : '')};
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: ${({ isInteractive }) =>
			isInteractive ? '#cccccc' : ''};
	}

	:active {
		transform: ${({ isInteractive }) => (isInteractive ? 'scale(0.95)' : '')};
	}
`
