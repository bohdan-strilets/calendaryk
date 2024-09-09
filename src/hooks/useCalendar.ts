import { useState } from 'react'

const useCalendar = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())

	const selectDate = (date: Date) => {
		setSelectedDate(date)
	}

	return { selectDate, selectedDate }
}

export default useCalendar
