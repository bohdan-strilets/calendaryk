import { FC } from 'react'

import { animationProperty, bounce } from './animation'
import { Button, Line } from './MenuButton.styled'

const MenuButton: FC = () => {
	return (
		<Button>
			<Line />
			<Line />
			<Line animate={animationProperty} transition={bounce} />
		</Button>
	)
}

export default MenuButton
