import { FC } from 'react'

import useResponsive from '@/hooks/useResponsive'

import SmallCalendar from '../Calendars/SmallCalendar'
import Greetings from '../Greetings'
import QuickMenu from '../QuickMenu'
import Statistics from '../Statistics'
import TodoList from '../TodoList'
import Vacation from '../Vacation'
import Weather from '../Weather'
import { Group } from './MainScreen.styled'

const MainScreen: FC = () => {
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
		<div>
			<Group>
				<Greetings name="Bohdan" />
				<SmallCalendar
					cellWidth={getCellWidth()}
					cellHeight={isLaptop ? '50px' : '40px'}
					borderRadius={true}
				/>
			</Group>
			<TodoList />
			<QuickMenu />
			<Weather />
			<Statistics />
			<Vacation />
		</div>
	)
}

export default MainScreen
