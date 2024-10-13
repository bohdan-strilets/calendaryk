import { FC, useState } from 'react'

import useRenderCalendar from '@/hooks/useRenderCalendar'
import useResponsive from '@/hooks/useResponsive'
import { MonthsOfYear } from '@/utils/data/monthsOfYear'

import Controllers from '../Controllers'
import Month from '../Month'
import WeekDays from '../WeekDays'

const Calendar: FC = () => {
	const [currentDate, setCurrentDate] = useState(new Date())

	const { getDaysOfMonth } = useRenderCalendar(currentDate)
	const { isMaxMobile } = useResponsive()

	const weeksFromSelectedMonth = getDaysOfMonth()
	const currentDay = currentDate.getDate()
	const currentMonth = currentDate.getMonth()
	const currentYear = currentDate.getFullYear()
	const currentMonthName = MonthsOfYear[currentMonth].name

	const handleNextMonth = () => {
		const newDate = new Date(currentDate)
		newDate.setMonth(currentDate.getMonth() + 1)
		setCurrentDate(newDate)
	}

	const handlePrevMonth = () => {
		const newDate = new Date(currentDate)
		newDate.setMonth(currentDate.getMonth() - 1)
		setCurrentDate(newDate)
	}

	return (
		<div>
			<Controllers
				handlePrevMonth={handlePrevMonth}
				handleNextMonth={handleNextMonth}
				currentMonthName={currentMonthName}
				currentYear={currentYear}
			/>
			<WeekDays cellWidth="100%" cellHeight="50px" />
			<Month
				month={weeksFromSelectedMonth}
				currentDate={currentDay}
				cellWidth="100%"
				cellHeight={isMaxMobile ? '40px' : '130px'}
				borderRadius={true}
				isInteractive={true}
				isBorder={true}
				textPosition="topLeft"
			/>
		</div>
	)
}

export default Calendar
