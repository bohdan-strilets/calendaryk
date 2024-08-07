import { FC } from 'react'

import useRenderCalendar from '@/hooks/useRenderCalendar'
import { SmallCalendarProps } from '@/types/props/calendars/SmallCalendarProps'
import { MonthsOfYear } from '@/utils/data/monthsOfYear'

import Month from '../Month'
import WeekDays from '../WeekDays'
import { Header } from './SmallCalendar.styled'

const SmallCalendar: FC<SmallCalendarProps> = ({
	cellWidth,
	cellHeight,
	borderRadius,
	background,
	color,
}) => {
	const date = new Date()
	const { getDaysOfMonth, getCurrentDay } = useRenderCalendar(date)

	const weeksFromSelectedMonth = getDaysOfMonth()
	const currentDay = getCurrentDay()
	const currentDate = date.getDate()
	const currentMonth = date.getMonth()
	const currentMonthName = MonthsOfYear[currentMonth].name

	return (
		<div>
			<Header>{currentMonthName}</Header>
			<WeekDays
				currentDay={currentDay}
				cellWidth={cellWidth}
				cellHeight={cellHeight}
			/>
			<Month
				month={weeksFromSelectedMonth}
				currentDate={currentDate}
				cellWidth={cellWidth}
				cellHeight={cellHeight}
				borderRadius={borderRadius}
				background={background}
				color={color}
			/>
		</div>
	)
}

export default SmallCalendar
