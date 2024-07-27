import { FC } from 'react'

import { GreetingsProps } from '@/types/props/GreetingsProps'

import {
	DateGroup,
	DateInfo,
	Day,
	GreetingMessage,
	Month,
	Name,
	Wrapper,
} from './Greetings.styled'

const Greetings: FC<GreetingsProps> = ({ name }) => {
	const currentDate = new Date()
	const day = currentDate.getDate()

	return (
		<Wrapper>
			<DateGroup>
				<Day>{day}</Day>
				<Month>July</Month>
			</DateGroup>
			<div>
				<GreetingMessage>
					Hello <Name>{name}</Name>
				</GreetingMessage>
				<DateInfo>Today is July {day} on the calendar, Saturday.</DateInfo>
			</div>
		</Wrapper>
	)
}

export default Greetings
