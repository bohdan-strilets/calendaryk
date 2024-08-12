import { FC } from 'react'

import useRenderCalendar from '@/hooks/useRenderCalendar'
import { MonthsOfYear } from '@/utils/data/monthsOfYear'

import Controllers from '../Controllers'
import Month from '../Month'
import WeekDays from '../WeekDays'

const Calendar: FC = () => {
	const { getDaysOfMonth, nextMonth, prevMonth, currentDate } =
		useRenderCalendar(new Date())

	const weeksFromSelectedMonth = getDaysOfMonth()
	const currentDay = currentDate.getDate()
	const currentMonth = currentDate.getMonth()
	const currentYear = currentDate.getFullYear()
	const currentMonthName = MonthsOfYear[currentMonth].name

	return (
		<div>
			<Controllers
				handlePrevMonth={prevMonth}
				handleNextMonth={nextMonth}
				currentMonthName={currentMonthName}
				currentYear={currentYear}
			/>
			<WeekDays cellWidth="100%" cellHeight="50px" />
			<Month
				month={weeksFromSelectedMonth}
				currentDate={currentDay}
				cellWidth="100%"
				cellHeight="130px"
				borderRadius={true}
			/>
		</div>
	)
}

export default Calendar
