import { FC } from 'react'

import { Item, Label, List } from './Header.styled'

const Header: FC = () => {
	return (
		<List>
			<Item>
				<Label>Information:</Label>
			</Item>
			<Item>
				<Label>Employment period:</Label>
			</Item>
			<Item>
				<Label>Salary per hour:</Label>
			</Item>
		</List>
	)
}

export default Header
