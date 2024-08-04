import { FC } from 'react'

import SmallCalendar from '../Calendars/SmallCalendar'
import Greetings from '../Greetings'
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
			<Weather />
			<Statistics />
		</div>
	)
}

export default MainScreen
