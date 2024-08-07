import { FC } from 'react'

import Greetings from '@/components/Greetings'
import QuickMenu from '@/components/QuickMenu'
import Statistics from '@/components/Statistics'
import TodoList from '@/components/TodoList'
import Vacation from '@/components/Vacation'
import Weather from '@/components/Weather'

const HomePage: FC = () => {
	return (
		<>
			<Greetings name="Bohdan" />
			<TodoList />
			<QuickMenu />
			<Weather />
			<Statistics />
			<Vacation />
		</>
	)
}

export default HomePage
