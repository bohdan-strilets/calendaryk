import styled from '@emotion/styled'

import { DayProps } from '@/types/props/calendars/DayCellProps'

export const Day = styled.li<DayProps>`
	display: flex;
	align-items: ${({ textPosition }) => {
		if (textPosition === 'topLeft') {
			return 'start'
		}
		return 'center'
	}};
	justify-content: ${({ textPosition }) => {
		if (textPosition === 'topLeft') {
			return 'start'
		}
		return 'center'
	}};

	width: ${({ width }) => (width ? width : '')};
	height: ${({ height }) => (height ? height : '')};
	padding: 5px;
	margin: 5px;

	border-radius: ${({ isBorderRadius }) => (isBorderRadius ? '3px' : '')};
	border: ${({ isBorder }) => (isBorder ? '1px solid #ccc' : 'none')};
	box-shadow: ${({ isBorder }) => (isBorder ? 'var(--box-shadow)' : '')};

	background-size: cover;
	background-position: center;
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

	pointer-events: ${({ dayNumberMonth }) => (dayNumberMonth ? '' : 'none')};
	cursor: ${({ isInteractive }) => (isInteractive ? 'pointer' : 'default')};
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
