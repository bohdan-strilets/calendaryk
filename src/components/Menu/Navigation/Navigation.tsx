import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { navigationItems } from '@/utils/dataWithJSX/navigationItems'

import { NavigationProps } from '@/types/props/menu/NavigationProps'

import { Button, Item, Label, List } from './Navigation.styled'

const Navigation: FC<NavigationProps> = ({ margin, onClose }) => {
	const navigate = useNavigate()

	const redirect = (path: string) => {
		navigate(path)
		onClose()
	}

	return (
		<List margin={margin}>
			{navigationItems.map(({ id, icon, label, path }, index) => (
				<Item
					key={id}
					initial={{ y: '-100%', opacity: 0 }}
					animate={{ y: '0%', opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3, delay: index * 0.1 }}
				>
					<Button type="button" onClick={() => redirect(path)}>
						{icon}
						<Label>{label}</Label>
					</Button>
				</Item>
			))}
		</List>
	)
}

export default Navigation
