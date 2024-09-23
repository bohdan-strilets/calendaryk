import { FC } from 'react'
import { BiSolidSelectMultiple } from 'react-icons/bi'
import { MdDeleteSweep, MdOutlineViewInAr } from 'react-icons/md'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import operations from '@/store/user/userOperations'
import { ActionsDropdownProps } from '@/types/props/allAvatars/ActionsDropdownProps'
import { getPublicCloudinaryId } from '@/utils/functions/getPublicCloudinaryId'

import { Button, Item, Label, List, Wrapper } from './ActionsDropdown.styled'

const ActionsDropdown: FC<ActionsDropdownProps> = ({ url, selectImage }) => {
	const dispatch = useAppDispatch()

	const selectCurrentAvatar = () => {
		console.log('selectCurrentAvatar')
	}

	const deleteAvatar = (url: string) => {
		const avatarPublicId = getPublicCloudinaryId(url)
		if (avatarPublicId) {
			dispatch(operations.deleteAvatar(avatarPublicId))
		}
	}

	return (
		<Wrapper className="actions-dropdown">
			<List>
				<Item>
					<Button onClick={() => selectImage(url)}>
						<MdOutlineViewInAr />
						<Label>View avatar</Label>
					</Button>
				</Item>
				<Item>
					<Button onClick={selectCurrentAvatar}>
						<BiSolidSelectMultiple />
						<Label>Select current</Label>
					</Button>
				</Item>
				<Item>
					<Button onClick={() => deleteAvatar(url)}>
						<MdDeleteSweep />
						<Label>Delete avatar</Label>
					</Button>
				</Item>
			</List>
		</Wrapper>
	)
}

export default ActionsDropdown
