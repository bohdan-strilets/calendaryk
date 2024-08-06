import { FC } from 'react'

import { WeatherForWeekProps } from '@/types/props/weather/WeatherForWeekProps'

import {
	DayInfo,
	DayName,
	IconWrapper,
	TemperatureLabel,
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
					<DayName>mon</DayName>
					<IconWrapper>{icon}</IconWrapper>
					<TemperatureLabel>{temperature}°C</TemperatureLabel>
				</DayInfo>
			))}
		</Wrapper>
	)
}

export default WeatherForWeek
