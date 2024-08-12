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
}) => {
	return (
		<Day
			currentDay={currentDate === day?.getDate()}
			width={width}
			height={height}
			background={background}
			color={color}
			isBorderRadius={isBorderRadius}
		>
			<p>{day?.getDate()}</p>
		</Day>
	)
}

export default DayCell
