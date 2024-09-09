import { FC } from 'react'

import useResponsive from '@/hooks/useResponsive'
import { GreetingsProps } from '@/types/props/greetings/GreetingsProps'

import SmallCalendar from '../Calendars/SmallCalendar'
import {
	Accent,
	DateGroup,
	DateInfo,
	Day,
	GreetingMessage,
	GreetingsWrapper,
	LeftSide,
	Month,
	Name,
	Wrapper,
} from './Greetings.styled'

const Greetings: FC<GreetingsProps> = ({ name }) => {
	const currentDate = new Date()
	const day = currentDate.getDate()

	const { isTablet, isLaptop, isMaxTablet, isMaxLaptop, isDesktop } =
		useResponsive()

	const getCellWidth = () => {
		if (isTablet && isMaxTablet) {
			return '50px'
		}
		if (isLaptop && isMaxLaptop) {
			return '60px'
		}
		if (isDesktop) {
			return '80px'
		}
		return '100%'
	}

	return (
		<Wrapper>
			<LeftSide>
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
			</LeftSide>
			<SmallCalendar
				cellWidth={getCellWidth()}
				cellHeight={isLaptop ? '50px' : '40px'}
				borderRadius={true}
				isCurrentDay={true}
				selectedDate={new Date()}
			/>
		</Wrapper>
	)
}

export default Greetings
