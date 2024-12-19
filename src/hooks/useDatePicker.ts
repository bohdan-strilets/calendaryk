import { useEffect, useState } from 'react'

import { MonthsOfYear } from '@/utils/data/monthsOfYear'

import { DatePicker } from '@/types/params/DatePicker'

import useRenderCalendar from './useRenderCalendar'

export const useDatePicker = ({
	initialDate: date,
	onDateChange,
}: DatePicker) => {
	const [initialDate, setInitialDate] = useState(date)
	const [isOpenOptions, setIsOpenOptions] = useState(false)

	const { getDaysOfMonth, getMonthYear } = useRenderCalendar(initialDate)

	const monthYear = getMonthYear()
	const monthName = MonthsOfYear[monthYear.month].name
	const day = initialDate.getDate()

	const daysOfMonth = getDaysOfMonth()
	const dateLabel = `${initialDate.getDate().toString().padStart(2, '0')} ${monthName} ${initialDate.getFullYear()}`

	useEffect(() => {
		onDateChange(initialDate)
	}, [initialDate])

	const toggleOptions = () => setIsOpenOptions((state) => !state)

	const handleNextMonth = () => {
		const newDate = new Date(initialDate)
		newDate.setMonth(initialDate.getMonth() + 1)
		setInitialDate(newDate)
	}

	const handlePrevMonth = () => {
		const newDate = new Date(initialDate)
		newDate.setMonth(initialDate.getMonth() - 1)
		setInitialDate(newDate)
	}

	const getDateFromCalendar = (date: Date) => {
		setInitialDate(date)
	}

	const getMonth = (month: string) => {
		const newDate = new Date(
			initialDate.getFullYear(),
			Number(month),
			initialDate.getDate()
		)
		setInitialDate(newDate)
	}

	const getYear = (year: string) => {
		const newDate = new Date(
			Number(year),
			initialDate.getMonth(),
			initialDate.getDate()
		)
		setInitialDate(newDate)
	}

	return {
		handleNextMonth,
		handlePrevMonth,
		daysOfMonth,
		getDateFromCalendar,
		monthName,
		day,
		getMonth,
		getYear,
		monthYear,
		isOpenOptions,
		toggleOptions,
		dateLabel,
	}
}

export default useDatePicker
