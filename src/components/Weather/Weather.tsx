import { motion } from 'framer-motion'
import { FC } from 'react'
import { BsCloudRain } from 'react-icons/bs'

import CurrentTemperature from './CurrentTemperature'
import LocationInfo from './LocationInfo'
import { DayWeather, LeftSide, Wrapper } from './Weather.styled'
import WeatherForWeek from './WeatherForWeek'
import { weather } from './WeatherForWeek/weather'

const Weather: FC = () => {
	return (
		<Wrapper>
			<DayWeather>
				<LeftSide>
					<LocationInfo country="Poland" city="Warsaw" />
					<motion.div
						initial={{ x: '100%', opacity: 0 }}
						animate={{ x: '0%', opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<BsCloudRain size={120} />
					</motion.div>
				</LeftSide>
				<CurrentTemperature current={25} min={18} max={30} />
			</DayWeather>
			<WeatherForWeek weatherForWeek={weather} />
		</Wrapper>
	)
}

export default Weather
