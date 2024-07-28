import { FC } from 'react'

import { MonthProps } from '@/types/props/MonthProps'

import { DayCell, Week } from './Month.styled'

const Month: FC<MonthProps> = ({
	month,
	currentDate,
	cellWidth,
	cellHeight,
}) => {
	return (
		<div>
			{month.map((week, index) => (
				<Week
					key={index}
					initial={{ y: '-100%', opacity: 0 }}
					animate={{ y: '0%', opacity: 1 }}
					transition={{ duration: 0.3, delay: index * 0.1 }}
				>
					{week.map((day, index) => (
						<DayCell
							key={index}
							currentDay={currentDate === day?.getDate()}
							cellWidth={cellWidth}
							cellHeight={cellHeight}
						>
							<p>{day?.getDate()}</p>
						</DayCell>
					))}
				</Week>
			))}
		</div>
	)
}

export default Month
