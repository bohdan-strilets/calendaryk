import { FC } from 'react'

import useResponsive from '@/hooks/useResponsive'
import { GreetingsProps } from '@/types/props/greetings/GreetingsProps'

import {
	Accent,
	DateGroup,
	DateInfo,
	Day,
	GreetingMessage,
	GreetingsWrapper,
	Month,
	Name,
	Wrapper,
} from './Greetings.styled'

const Greetings: FC<GreetingsProps> = ({ name }) => {
	const { isMaxTablet } = useResponsive()
	const currentDate = new Date()
	const day = currentDate.getDate()

	return (
		<Wrapper>
			{isMaxTablet && (
				<GreetingsWrapper>
					<DateGroup>
						<Day>{day}</Day>
						<Month>July</Month>
					</DateGroup>
					<GreetingMessage>
						Hello <Name>{name}</Name>
					</GreetingMessage>
				</GreetingsWrapper>
			)}

			{!isMaxTablet && (
				<DateGroup>
					<Day>{day}</Day>
					<Month>July</Month>
				</DateGroup>
			)}

			<div>
				{!isMaxTablet && (
					<GreetingMessage>
						Hello <Name>{name}</Name>
					</GreetingMessage>
				)}

				<DateInfo>Today is July {day} on the calendar, Saturday.</DateInfo>
				<p>
					Today is a <Accent>day off</Accent>, you have planned{' '}
					<Accent>4</Accent> events for today.
				</p>
				<p>
					Tomorrow at <Accent>work</Accent> at <Accent>18:00</Accent>
				</p>
			</div>
		</Wrapper>
	)
}

export default Greetings
