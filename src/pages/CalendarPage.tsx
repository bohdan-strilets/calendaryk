import { AnimatePresence } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

import Calendar from '@/components/Calendars/Calendar'
import DayInformation from '@/components/DayInformation'
import AddedDayForm from '@/components/DayInformation/AddedDayForm'
import Modal from '@/components/Modal'
import Loader from '@/components/UI/Loader'
import useCalendar from '@/hooks/useCalendar'
import useModal from '@/hooks/useModal'
import { useGetAllQuery } from '@/store/calendars/calendarApi'
import { Day } from '@/types/types/Day'
import { normalizeDate } from '@/utils/functions/normalizeDate'

const CalendarPage: FC = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [allDays, setAllDays] = useState<Day[] | null>(null)
	const [dayByDate, setDayByDate] = useState<Day | null>(null)

	const { checkQueryParam, modalNames } = useModal()
	const { data, isLoading } = useGetAllQuery()
	const { areYearsEqual } = useCalendar()

	useEffect(() => {
		if (data && data.data) {
			setAllDays(data.data)
		}
	}, [data])

	const getDayByDate = (date: Date): Day | null => {
		const filteredArr = allDays?.filter((day) =>
			areYearsEqual(new Date(day.date), date)
		)
		if (filteredArr && filteredArr[0]) {
			return filteredArr[0]
		}
		return null
	}

	useEffect(() => {
		const dayByDate = getDayByDate(selectedDate)
		setDayByDate(dayByDate)
	}, [selectedDate])

	const getDate = (date: Date) => setSelectedDate(date)
	const formateSelectedDate = normalizeDate(selectedDate.toString())
	const monthIndex = selectedDate.getMonth()

	const getDaysByMonthIndex = (monthIndex: number): Day[] | [] => {
		const days = allDays?.filter(
			(day) => new Date(day.date).getMonth() === monthIndex
		)

		return days ? days : []
	}

	const daysByMonthIndex = getDaysByMonthIndex(monthIndex)

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<Calendar getDate={getDate} daysForCurrentMonth={daysByMonthIndex} />
			)}

			<AnimatePresence mode="wait">
				{checkQueryParam(modalNames.CREATE_DAY_INFORMATION) && (
					<Modal title={`Add a new day ${formateSelectedDate}`}>
						{dayByDate ? (
							<DayInformation day={dayByDate} />
						) : (
							<AddedDayForm selectedDate={formateSelectedDate} />
						)}
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default CalendarPage
