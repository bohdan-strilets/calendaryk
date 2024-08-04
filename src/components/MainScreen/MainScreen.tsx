import { FC } from 'react'

import SmallCalendar from '../Calendars/SmallCalendar'
import Greetings from '../Greetings'
import QuickMenu from '../QuickMenu'
import Statistics from '../Statistics'
import TodoList from '../TodoList'
import Weather from '../Weather'
import { Group } from './MainScreen.styled'

const MainScreen: FC = () => {
	return (
		<div>
			<Group>
				<Greetings name="Bohdan" />
				<SmallCalendar />
			</Group>
			<TodoList />
			<QuickMenu />
			<Weather />
			<Statistics />
		</div>
	)
}

export default MainScreen
