import { FC } from 'react'

import { useAppSelector } from '@/hooks/useAppSelector'
import { getAvatars } from '@/store/user/userSelectors'

import { Image, Item, List } from './AllAvatars.styled'

const AllAvatars: FC = () => {
	const allAvatars = useAppSelector(getAvatars)

	return (
		<List>
			{allAvatars?.map((url) => (
				<Item key={url}>
					<Image url={url} />
				</Item>
			))}
		</List>
	)
}

export default AllAvatars
