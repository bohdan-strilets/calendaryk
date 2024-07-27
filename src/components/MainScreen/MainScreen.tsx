import { FC } from 'react'

import Greetings from '../Greetings'
import { GratingsAndCalendarWrapper, Wrapper } from './MainScreen.styled'

const MainScreen: FC = () => {
	return (
		<Wrapper>
			<GratingsAndCalendarWrapper>
				<Greetings name="Bohdan" />
				<div>
					<p>Small calendar component</p>
				</div>
			</GratingsAndCalendarWrapper>
		</Wrapper>
	)
}

export default MainScreen
