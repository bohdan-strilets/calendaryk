import { FC } from 'react'
import { MdDelete } from 'react-icons/md'
import { RiEdit2Fill } from 'react-icons/ri'

import Button from '@/components/UI/Button'

import { Item, List } from './Controllers.styled'

const Controllers: FC = () => {
	return (
		<List>
			<Item>
				<Button type="button" variant="black" height="35px">
					<RiEdit2Fill />
				</Button>
			</Item>
			<Item>
				<Button type="button" variant="black" height="35px">
					<MdDelete />
				</Button>
			</Item>
		</List>
	)
}

export default Controllers
