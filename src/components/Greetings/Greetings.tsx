import { FC } from 'react'

import { GreetingsProps } from '@/types/props/GreetingsProps'

import {
	Accent,
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
				<p>
					Today is a day off, you have planned <Accent>4</Accent> events for
					today.
				</p>
				<p>
					Tomorrow at work at <Accent>18:00</Accent>
				</p>
			</div>
		</Wrapper>
	)
}

export default Greetings
