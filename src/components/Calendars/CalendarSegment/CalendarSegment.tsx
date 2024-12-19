import { FC } from 'react'

import useRenderCalendar from '@/hooks/useRenderCalendar'

import { CalendarSegmentProps } from '@/types/props/calendars/CalendarSegmentProps'

import Month from '../Month'
import WeekDays from '../WeekDays'

import { Wrapper } from './CalendarSegment.styled'

const CalendarSegment: FC<CalendarSegmentProps> = ({
	startRange,
	endRange,
	cellWidth,
	cellHeight,
	background,
	color,
	borderRadius,
	margin,
}) => {
	const { getDaysOfMonthInRange } = useRenderCalendar(new Date())
	const days = getDaysOfMonthInRange(new Date(startRange), new Date(endRange))

	return (
		<Wrapper margin={margin}>
			<WeekDays cellWidth={cellWidth} cellHeight={cellHeight} />
			<Month
				month={days}
				cellWidth={cellWidth}
				cellHeight={cellHeight}
				background={background}
				color={color}
				borderRadius={borderRadius}
			/>
		</Wrapper>
	)
}

export default CalendarSegment
