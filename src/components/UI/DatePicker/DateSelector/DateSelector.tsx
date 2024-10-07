import { FC } from 'react'
import { ImCalendar } from 'react-icons/im'

import { DateSelectorProps } from '@/types/props/ui/datePicker/DateSelectorProps'

import { Input, InputDisplay, Label } from './DateSelector.styled'

const DateSelector: FC<DateSelectorProps> = ({
	dateLabel,
	handleTogglePicker,
	label,
}) => {
	return (
		<>
			{label && <Label>{label}</Label>}
			<Input>
				<InputDisplay onClick={handleTogglePicker}>
					<p>{dateLabel}</p>
					<ImCalendar className="calendar-icon" />
				</InputDisplay>
			</Input>
		</>
	)
}

export default DateSelector
