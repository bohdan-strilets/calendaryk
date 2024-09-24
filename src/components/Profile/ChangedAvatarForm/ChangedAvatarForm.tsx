import { FC } from 'react'

import Uploader from '@/components/Uploader'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import operations from '@/store/user/userOperations'
import { FileFormData } from '@/types/types/FileFormData'
import { ImageFileSchema } from '@/validation/ImageFileSchema'

const ChangedAvatarForm: FC = () => {
	const dispatch = useAppDispatch()

	const handleSubmitForm = async ({ file }: FileFormData) => {
		await dispatch(operations.uploadAvatar(file))
	}

	return (
		<Uploader
			fileName="avatar"
			fileTypes={ImageFileSchema.types}
			fileSize={ImageFileSchema.size}
			callback={handleSubmitForm}
		/>
	)
}

export default ChangedAvatarForm
