import { FC, useEffect, useState } from 'react'

import useModal from '@/hooks/useModal'
import useRenderCalendar from '@/hooks/useRenderCalendar'
import useResponsive from '@/hooks/useResponsive'

import { MonthsOfYear } from '@/utils/data/monthsOfYear'

import { CalendarProps } from '@/types/props/calendars/CalendarProps'

import Controllers from '../Controllers'
import Month from '../Month'
import WeekDays from '../WeekDays'

const Calendar: FC<CalendarProps> = ({ getDate, daysForCurrentMonth }) => {
	const [currentDate, setCurrentDate] = useState(new Date())
	const [clickedDay, setClickedDay] = useState(new Date())

	const { getDaysOfMonth } = useRenderCalendar(currentDate)
	const { isMaxMobile } = useResponsive()
	const { openModal, modalNames } = useModal()

	const weeksFromSelectedMonth = getDaysOfMonth()
	const currentDay = currentDate.getDate()
	const currentMonth = currentDate.getMonth()
	const currentYear = currentDate.getFullYear()
	const currentMonthName = MonthsOfYear[currentMonth].name

	useEffect(() => {
		getDate(new Date(currentYear, currentMonth, clickedDay.getDate()))
	}, [clickedDay])

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

	const handleCreateDayInfo = () => {
		openModal(modalNames.CREATE_DAY_INFORMATION)
	}

	const getClickedDay = (date: Date) => {
		setClickedDay(date)
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
				callback={handleCreateDayInfo}
				selectDate={getClickedDay}
				daysForCurrentMonth={daysForCurrentMonth}
			/>
		</div>
	)
}

export default Calendar
