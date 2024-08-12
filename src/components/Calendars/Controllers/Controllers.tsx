import { FC } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

import Button from '@/components/UI/Button'
import { ControllersProps } from '@/types/props/calendars/ControllersProps'

import { Header, MonthName } from './Controllers.styled'

const Controllers: FC<ControllersProps> = ({
	handlePrevMonth,
	handleNextMonth,
	currentMonthName,
	currentYear,
}) => {
	return (
		<Header>
			<Button
				type="button"
				width="150px"
				height="45px"
				variant="black"
				onClick={handlePrevMonth}
			>
				<HiArrowLeft />
			</Button>
			<MonthName>
				{currentMonthName} {currentYear}
			</MonthName>
			<Button
				type="button"
				width="150px"
				height="45px"
				variant="black"
				onClick={handleNextMonth}
			>
				<HiArrowRight />
			</Button>
		</Header>
	)
}

export default Controllers
