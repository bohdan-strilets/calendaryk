import { FC } from 'react'

import EventSummaryCell from '@/components/DayInformation/EventSummaryCell'

import { DeyCellProps } from '@/types/props/calendars/DayCellProps'

import { Day } from './DayCell.styled'

const DayCell: FC<DeyCellProps> = ({
	currentDate,
	day,
	width,
	height,
	background,
	color,
	isBorderRadius,
	selectDate,
	selectedDay,
	isInteractive,
	isBorder,
	textPosition,
	callback,
	dayInformation,
}) => {
	const dayNumberMonth = day?.getDate()

	const onCellClick = (date?: Date) => {
		if (date && selectDate) {
			selectDate(date)
		}
		if (callback) {
			callback()
		}
	}

	return (
		<Day
			currentDay={currentDate === dayNumberMonth}
			width={width}
			height={height}
			background={background}
			color={color}
			isBorderRadius={isBorderRadius}
			onClick={() => onCellClick(day)}
			style={day === undefined ? { background: 'transparent' } : {}}
			selectedDay={selectedDay === dayNumberMonth}
			isInteractive={isInteractive}
			isBorder={isBorder}
			textPosition={textPosition}
			dayNumberMonth={dayNumberMonth}
		>
			{dayNumberMonth && (
				<EventSummaryCell
					numberHours={dayInformation?.numberHours}
					isAdditionalHours={dayInformation?.isAdditional}
					// numberTodo={2}
					shiftNumber={dayInformation?.shiftNumber}
				>
					<p>{dayNumberMonth}</p>
				</EventSummaryCell>
			)}
		</Day>
	)
}

export default DayCell
