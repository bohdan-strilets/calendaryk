import { AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'

import Calendar from '@/components/Calendars/Calendar'
import AddedDayForm from '@/components/DayInformation/AddedDayForm'
import Modal from '@/components/Modal'
import Loader from '@/components/UI/Loader'
import useModal from '@/hooks/useModal'
import { useGetAllQuery } from '@/store/calendars/calendarApi'
import { normalizeDate } from '@/utils/functions/normalizeDate'

const CalendarPage: FC = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const { checkQueryParam, modalNames } = useModal()
	const { data, isLoading } = useGetAllQuery()
	console.log(data?.data)

	const getDate = (date: Date) => setSelectedDate(date)
	const formateSelectedDate = normalizeDate(selectedDate.toString())

	return (
		<>
			{isLoading ? <Loader /> : <Calendar getDate={getDate} />}

			<AnimatePresence mode="wait">
				{checkQueryParam(modalNames.CREATE_DAY_INFORMATION) && (
					<Modal
						title={`Add a new day ${normalizeDate(selectedDate.toString())}`}
					>
						<AddedDayForm selectedDate={formateSelectedDate} />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default CalendarPage
