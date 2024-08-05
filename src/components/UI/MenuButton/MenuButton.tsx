import { FC } from 'react'

import { MenuButtonProps } from '@/types/props/ui/MenuButtonProps'

import { animationProperty, bounce } from './animation'
import { Button, Line } from './MenuButton.styled'

const MenuButton: FC<MenuButtonProps> = ({ open }) => {
	return (
		<Button type="button" onClick={open}>
			<Line />
			<Line />
			<Line animate={animationProperty} transition={bounce} />
		</Button>
	)
}

export default MenuButton
