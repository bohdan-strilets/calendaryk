import { FC } from 'react'
import { BiSolidSelectMultiple } from 'react-icons/bi'
import { MdDeleteSweep, MdOutlineViewInAr } from 'react-icons/md'
import { toast } from 'react-toastify'

import Loader from '@/components/UI/Loader'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import operations from '@/store/user/userOperations'
import { getAvatars, getLoading } from '@/store/user/userSelectors'
import { ActionsDropdownProps } from '@/types/props/allAvatars/ActionsDropdownProps'
import { getPublicCloudinaryId } from '@/utils/functions/getPublicCloudinaryId'

import { Button, Item, Label, List, Wrapper } from './ActionsDropdown.styled'

const ActionsDropdown: FC<ActionsDropdownProps> = ({ url, selectImage }) => {
	const dispatch = useAppDispatch()
	const loading = useAppSelector(getLoading)
	const allAvatars = useAppSelector(getAvatars)

	const selectCurrentAvatar = async (url: string) => {
		const avatarPublicId = getPublicCloudinaryId(url)
		if (avatarPublicId) {
			const isSelected = allAvatars?.at(-1)?.includes(avatarPublicId)
			if (!isSelected) {
				dispatch(operations.selectAvatar(avatarPublicId))
				toast.success('Avatar changed successfully')
			} else {
				toast.warning('This avatar is already selected as the current one')
			}
		}
	}

	const deleteAvatar = async (url: string) => {
		const avatarPublicId = getPublicCloudinaryId(url)
		if (avatarPublicId) {
			await dispatch(operations.deleteAvatar(avatarPublicId))
			toast.success('Image successfully deleted')
		}
	}

	return (
		<Wrapper className="actions-dropdown">
			{loading ? (
				<Loader />
			) : (
				<List>
					<Item>
						<Button onClick={() => selectImage(url)} disabled={loading}>
							<MdOutlineViewInAr />
							<Label>View avatar</Label>
						</Button>
					</Item>
					<Item>
						<Button onClick={() => selectCurrentAvatar(url)} disabled={loading}>
							<BiSolidSelectMultiple />
							<Label>Select current</Label>
						</Button>
					</Item>
					<Item>
						<Button onClick={() => deleteAvatar(url)} disabled={loading}>
							<MdDeleteSweep />
							<Label>Delete avatar</Label>
						</Button>
					</Item>
				</List>
			)}
		</Wrapper>
	)
}

export default ActionsDropdown
