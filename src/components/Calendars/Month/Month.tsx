import { FC } from 'react'

import { MonthProps } from '@/types/props/calendars/MonthProps'

import DayCell from '../DayCell'
import { Week } from './Month.styled'

const Month: FC<MonthProps> = ({
	month,
	currentDate,
	cellWidth,
	cellHeight,
	background,
	color,
	borderRadius,
	selectDate,
	selectedDay,
	isInteractive,
	isBorder,
	textPosition,
	callback,
	daysForCurrentMonth,
}) => {
	return (
		<>
			{month.map((week, index) => (
				<Week
					key={index}
					initial={{ y: '-100%', opacity: 0 }}
					animate={{ y: '0%', opacity: 1 }}
					transition={{ duration: 0.3, delay: index * 0.1 }}
				>
					{week.map((day, index) => {
						const dayInformation = daysForCurrentMonth?.filter(
							(item) => new Date(item.date).getDate() === day?.getDate()
						)[0]

						return (
							<DayCell
								key={index}
								currentDate={currentDate}
								day={day}
								width={cellWidth}
								height={cellHeight}
								background={background}
								color={color}
								isBorderRadius={borderRadius}
								selectDate={selectDate}
								selectedDay={selectedDay}
								isInteractive={isInteractive}
								isBorder={isBorder}
								textPosition={textPosition}
								callback={callback}
								dayInformation={dayInformation}
							/>
						)
					})}
				</Week>
			))}
		</>
	)
}

export default Month
