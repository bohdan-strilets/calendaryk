import { FC } from 'react'

import { NavigationProps } from '@/types/props/NavigationProps'
import { navigationItems } from '@/utils/navigationItems'

import { Button, Item, Label, List } from './Navigation.styled'

const Navigation: FC<NavigationProps> = ({ margin }) => {
	return (
		<List margin={margin}>
			{navigationItems.map(({ id, icon, label }, index) => (
				<Item
					key={id}
					initial={{ y: '-100%', opacity: 0 }}
					animate={{ y: '100%', opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3, delay: index * 0.1 }}
				>
					<Button type="button">
						{icon}
						<Label>{label}</Label>
					</Button>
				</Item>
			))}
		</List>
	)
}

export default Navigation
