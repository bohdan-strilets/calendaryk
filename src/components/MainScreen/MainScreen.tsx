import { FC } from 'react'

import SmallCalendar from '../Calendars/SmallCalendar'
import Greetings from '../Greetings'
import Weather from '../Weather'
import { Group } from './MainScreen.styled'

const MainScreen: FC = () => {
	return (
		<div>
			<Group>
				<Greetings name="Bohdan" />
				<SmallCalendar />
			</Group>
			<Weather />
		</div>
	)
}

export default MainScreen
