import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

import { DatePickerInputs } from '@/types/inputs/DatePickerInputs'
import { DatePicker } from '@/types/params/DatePicker'
import { MonthsOfYear } from '@/utils/data/monthsOfYear'

import useCalendar from './useCalendar'
import useClickOutside from './useClickOutside'

export const useDatePicker = ({
	defaultValue,
	onDateChange,
	placeholder,
}: DatePicker) => {
	const { selectedDate, selectDate } = useCalendar()
	const { isOpen, toggle, divRef } = useClickOutside()

	const [selectedDay, setSelectedDay] = useState(selectedDate.getDate())
	const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth())
	const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear())
	const [defaultLabel, setDefaultLabel] = useState('')

	const selectedMonthName = useMemo(
		() => MonthsOfYear[selectedMonth]?.name,
		[selectedMonth]
	)
	const formattedSelectedDate = useMemo(
		() => `${selectedDay} ${selectedMonthName} ${selectedYear}`,
		[selectedDay, selectedMonthName, selectedYear]
	)

	const initializeDefaultDate = useCallback(() => {
		if (defaultValue) {
			const formattedDefaultDate = defaultValue.toISOString().split('T')[0]
			const date = new Date(formattedDefaultDate)
			selectDate(date)
		}
	}, [defaultValue, selectDate])

	useEffect(() => {
		initializeDefaultDate()
	}, [defaultValue])

	useEffect(() => {
		setSelectedDay(selectedDate.getDate())
		setSelectedMonth(selectedDate.getMonth())
		setSelectedYear(selectedDate.getFullYear())
	}, [selectedDate])

	const {
		register,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm<DatePickerInputs>()

	useEffect(() => {
		if (selectedDate) {
			reset({
				yearList: selectedYear.toString(),
				monthList: selectedMonth.toString(),
			})
		}
	}, [selectedDate, reset, selectedYear, selectedMonth])

	const selectedMonthFromForm = Number(watch('monthList'))
	const selectedYearFromForm = Number(watch('yearList'))

	useEffect(() => {
		if (!isNaN(selectedMonthFromForm) && !isNaN(selectedYearFromForm)) {
			if (
				selectedMonthFromForm !== selectedMonth ||
				selectedYearFromForm !== selectedYear
			) {
				setSelectedMonth(selectedMonthFromForm)
				setSelectedYear(selectedYearFromForm)

				const newSelectedDate = new Date(
					selectedYearFromForm,
					selectedMonthFromForm,
					selectedDay
				)
				selectDate(newSelectedDate)
			}
		}
	}, [selectedMonthFromForm, selectedYearFromForm])

	const handleDateSelection = useCallback(() => {
		const date = new Date(selectedYear, selectedMonth, selectedDay)
		onDateChange(date)
		setDefaultLabel(formattedSelectedDate)
		toggle()
	}, [
		onDateChange,
		selectedYear,
		selectedMonth,
		selectedDay,
		formattedSelectedDate,
		toggle,
	])

	useEffect(() => {
		if (defaultValue) {
			const formattedDefaultDate = defaultValue.toISOString().split('T')[0]
			const date = new Date(formattedDefaultDate)

			const day = date?.getDate()
			const numberMonth = date?.getMonth()
			const monthName = MonthsOfYear[numberMonth].name
			const year = date.getFullYear()

			setDefaultLabel(`${day} ${monthName} ${year}`)
		} else {
			setDefaultLabel(placeholder)
		}
	}, [defaultValue])

	return {
		divRef,
		toggle,
		defaultLabel,
		isOpen,
		selectDate,
		selectedDate,
		selectedDay,
		formattedSelectedDate,
		register,
		setValue,
		watch,
		errors,
		initializeDefaultDate,
		handleDateSelection,
	}
}

export default useDatePicker
