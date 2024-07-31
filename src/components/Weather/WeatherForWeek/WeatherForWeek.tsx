import { FC } from 'react'

import { WeatherForWeekProps } from '@/types/props/WeatherForWeekProps'

import {
	DayInfo,
	DayLabel,
	DayLabelTemp,
	Wrapper,
} from './WeatherForWeek.styled'

const WeatherForWeek: FC<WeatherForWeekProps> = ({ weatherForWeek }) => {
	return (
		<Wrapper>
			{weatherForWeek.map(({ id, icon, temperature }, index) => (
				<DayInfo
					key={id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
				>
					<DayLabel>mon</DayLabel>
					{icon}
					<DayLabelTemp>{temperature}°C</DayLabelTemp>
				</DayInfo>
			))}
		</Wrapper>
	)
}

export default WeatherForWeek
