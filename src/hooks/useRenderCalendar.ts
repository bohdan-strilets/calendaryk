import { useState } from 'react'

import { MonthYear } from '@/types/types/MonthYear'

const useRenderCalendar = (date: Date) => {
	const [currentDate, setCurrentDate] = useState(date)

	const getMonthYear = (): MonthYear => {
		const year = currentDate.getFullYear()
		const month = currentDate.getMonth()
		return { year, month }
	}

	const getNumberDaysInMonth = (): number => {
		const monthYear = getMonthYear()
		return new Date(monthYear.year, monthYear.month + 1, 0).getDate()
	}

	const getStartWeek = (): number => {
		const monthYear = getMonthYear()
		const firstDayOfMonth = new Date(monthYear.year, monthYear.month, 1)
		const dayOfWeek = firstDayOfMonth.getDay() - 1

		if (dayOfWeek === -1) return 6
		return dayOfWeek
	}

	const getCurrentDay = (): number => {
		const currentDay = new Date(currentDate).getDay() - 1

		if (currentDay === -1) return 6
		return currentDay
	}

	const getDaysOfMonth = (): (undefined[] | Date[])[] => {
		const daysOfMonth: (undefined[] | Date[])[] = []
		const daysInWeek = 7
		const numberDaysInMonth = getNumberDaysInMonth()
		const startWeekOn = getStartWeek()
		const monthYear = getMonthYear()
		let day = 1

		const numberOfWeeks = Math.ceil(
			(numberDaysInMonth + startWeekOn) / daysInWeek
		)

		for (let i = 0; i < numberOfWeeks; i++) {
			daysOfMonth[i] = []
			const week = daysOfMonth[i]

			for (let j = 0; j < daysInWeek; j++) {
				if (day > numberDaysInMonth || (i === 0 && j < startWeekOn)) {
					week[j] = undefined
				} else {
					const newDay = new Date(monthYear.year, monthYear.month, day++)
					week[j] = newDay
				}
			}
		}

		return daysOfMonth
	}

	return {
		getDaysOfMonth,
		getMonthYear,
		getCurrentDay,
	}
}

export default useRenderCalendar
