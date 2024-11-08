import { useState } from 'react'

const useCalendar = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())

	const selectDate = (date: Date) => {
		setSelectedDate(date)
	}

	const areYearsEqual = (a: Date, b: Date): boolean => {
		if (a instanceof Date && b instanceof Date) {
			return (
				a.getFullYear() === b.getFullYear() &&
				a.getMonth() === b.getMonth() &&
				a.getDate() === b.getDate()
			)
		}
		return false
	}

	return { selectDate, selectedDate, areYearsEqual }
}

export default useCalendar
