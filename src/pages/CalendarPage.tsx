import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'

import Calendar from '@/components/Calendars/Calendar'
import Modal from '@/components/Modal'
import useModal from '@/hooks/useModal'

const CalendarPage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()

	return (
		<>
			<Calendar />
			<AnimatePresence mode="wait">
				{checkQueryParam(modalNames.CREATE_DAY_INFORMATION) && (
					<Modal title="Add a new day">
						<p>Add a new day</p>
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default CalendarPage
