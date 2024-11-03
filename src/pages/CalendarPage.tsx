import { AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'

import Calendar from '@/components/Calendars/Calendar'
import AddedDayForm from '@/components/DayInformation/AddedDayForm'
import Modal from '@/components/Modal'
import useModal from '@/hooks/useModal'

const CalendarPage: FC = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const { checkQueryParam, modalNames } = useModal()

	const getDate = (date: Date) => setSelectedDate(date)

	return (
		<>
			<Calendar getDate={getDate} />
			<AnimatePresence mode="wait">
				{checkQueryParam(modalNames.CREATE_DAY_INFORMATION) && (
					<Modal title="Add a new day">
						<AddedDayForm selectedDate={selectedDate} />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default CalendarPage
