import { FC, useEffect } from 'react'

import useRenderCalendar from '@/hooks/useRenderCalendar'
import { SmallCalendarProps } from '@/types/props/calendars/SmallCalendarProps'
import { MonthsOfYear } from '@/utils/data/monthsOfYear'

import Month from '../Month'
import WeekDays from '../WeekDays'
import { Header } from './SmallCalendar.styled'

const SmallCalendar: FC<SmallCalendarProps> = ({
	selectedDate,
	cellWidth,
	cellHeight,
	borderRadius,
	background,
	color,
	selectDate,
	isCurrentDay,
	selectedDay,
	isInteractive,
}) => {
	const date = selectedDate ? selectedDate : new Date()

	const { getDaysOfMonth, getCurrentDay, setSelectedDate } =
		useRenderCalendar(date)

	useEffect(() => {
		setSelectedDate()
	}, [date])

	const weeksFromSelectedMonth = getDaysOfMonth()
	const currentDay = isCurrentDay ? getCurrentDay() : undefined
	const currentDate = isCurrentDay ? date.getDate() : undefined
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
				selectDate={selectDate}
				selectedDay={selectedDay}
				isInteractive={isInteractive}
			/>
		</div>
	)
}

export default SmallCalendar
