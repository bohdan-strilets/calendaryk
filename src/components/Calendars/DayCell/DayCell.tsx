import { FC } from 'react'

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
}) => {
	const dayNumberMonth = day?.getDate()

	const onCellClick = (date?: Date) => {
		if (date && selectDate) {
			selectDate(date)
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
		>
			<p>{day?.getDate()}</p>
		</Day>
	)
}

export default DayCell
