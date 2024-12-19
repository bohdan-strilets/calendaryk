import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'

import Month from '@/components/Calendars/Month'

import useClickOutside from '@/hooks/useClickOutside'
import useDatePicker from '@/hooks/useDatePicker'

import { DatePickerProps } from '@/types/props/ui/datePicker/DatePickerProps'

import AdditionalOptions from './AdditionalOptions'
import Controllers from './Controllers'
import { Picker, Wrapper } from './DatePicker.styled'
import DateSelector from './DateSelector'

const DatePicker: FC<DatePickerProps> = ({
	onDateChange,
	initialDate,
	label,
	margin,
}) => {
	const {
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
	} = useDatePicker({ initialDate, onDateChange })

	const {
		isOpen: isOpenPicker,
		toggle: togglePicker,
		divRef: divRefPicker,
	} = useClickOutside()

	return (
		<Wrapper ref={divRefPicker} margin={margin}>
			<DateSelector
				label={label}
				dateLabel={dateLabel}
				handleTogglePicker={togglePicker}
			/>
			<AnimatePresence mode="wait">
				{isOpenPicker && (
					<Picker
						key="picker"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						<Controllers
							handleNextMonth={handleNextMonth}
							handlePrevMonth={handlePrevMonth}
							handleOpenAdditionalOptions={toggleOptions}
							monthName={monthName}
							year={monthYear.year}
							isOpen={isOpenOptions}
						/>
						<Month
							month={daysOfMonth}
							cellHeight="40px"
							cellWidth="80px"
							borderRadius={true}
							isInteractive={true}
							selectDate={getDateFromCalendar}
							selectedDay={day}
						/>

						{isOpenOptions && (
							<AdditionalOptions
								getMonth={getMonth}
								getYear={getYear}
								monthYear={monthYear}
							/>
						)}
					</Picker>
				)}
			</AnimatePresence>
		</Wrapper>
	)
}

export default DatePicker
