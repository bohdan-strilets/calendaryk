import { FC } from 'react'
import { IoMdArrowDown, IoMdArrowUp } from 'react-icons/io'

import { CurrentTemperatureProps } from '@/types/props/weather/CurrentTemperatureProps'

import {
	TemperatureDisplay,
	TemperatureLabel,
	TemperatureRange,
	TemperatureRangeWrapper,
	TemperatureSymbol,
	Wrapper,
} from './CurrentTemperature.styled'

const CurrentTemperature: FC<CurrentTemperatureProps> = ({
	current,
	min,
	max,
}) => {
	return (
		<Wrapper>
			<TemperatureDisplay>
				{current}
				<TemperatureSymbol>°C</TemperatureSymbol>
			</TemperatureDisplay>
			<TemperatureRangeWrapper>
				<TemperatureRange>
					<IoMdArrowDown size={20} color="var(--red-color)" />
					<TemperatureLabel>{min}°C</TemperatureLabel>
				</TemperatureRange>
				<TemperatureRange margin="0 0 0 30px">
					<IoMdArrowUp size={20} color="var(--green-color)" />
					<TemperatureLabel>{max}°C</TemperatureLabel>
				</TemperatureRange>
			</TemperatureRangeWrapper>
		</Wrapper>
	)
}

export default CurrentTemperature
