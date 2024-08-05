import { FC } from 'react'

import useRenderCalendar from '@/hooks/useRenderCalendar'
import { MonthsOfYear } from '@/utils/monthsOfYear'

import Month from '../Month'
import WeekDays from '../WeekDays'
import { Header } from './SmallCalendar.styled'

const SmallCalendar: FC = () => {
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
			<WeekDays currentDay={currentDay} cellWidth="80px" cellHeight="50px" />
			<Month
				month={weeksFromSelectedMonth}
				currentDate={currentDate}
				cellWidth="80px"
				cellHeight="50px"
				borderRadius={true}
			/>
		</div>
	)
}

export default SmallCalendar
