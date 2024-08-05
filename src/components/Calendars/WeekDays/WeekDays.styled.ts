import styled from '@emotion/styled'

import { DayNameProps } from '@/types/props/calendars/WeekDaysProps'

export const Wrapper = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const DayName = styled.li<DayNameProps>`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	font-weight: 700;
	text-transform: uppercase;

	width: ${({ cellWidth }) => (cellWidth ? cellWidth : '')};
	height: ${({ cellHeight }) => (cellHeight ? cellHeight : '')};

	::after {
		content: '';
		display: ${({ currentDay }) => (currentDay ? 'block' : 'none')};

		position: absolute;
		top: 70%;
		left: 50%;
		transform: translate(-50%);

		width: 50%;
		height: 2px;

		background-color: var(--green-color);
	}
`
