import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Modal from '@/components/Modal'
import Profile from '@/components/Profile'
import AllAvatars from '@/components/Profile/AllAvatars'
import ChangedAvatarForm from '@/components/Profile/ChangedAvatarForm'
import ChangedEmailForm from '@/components/Profile/ChangedEmailForm'
import ChangedPasswordForm from '@/components/Profile/ChangedPasswordForm'
import ChangedProfileForm from '@/components/Profile/ChangedProfileForm'
import Dialog from '@/components/UI/Dialog'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import useModal from '@/hooks/useModal'

import operations from '@/store/user/userOperations'
import { getLoading } from '@/store/user/userSelectors'

import { navigationPaths } from '@/utils/data/navigationPaths'

const ProfilePage: FC = () => {
	const { checkQueryParam, modalNames, closeModal } = useModal()
	const dispatch = useAppDispatch()
	const loading = useAppSelector(getLoading)
	const navigate = useNavigate()

	const deleteProfile = async () => {
		await dispatch(operations.deleteProfile())
		closeModal()
		navigate(navigationPaths.HOME)
	}

	return (
		<>
			<Profile />
			<AnimatePresence mode="wait">
				{checkQueryParam(modalNames.CHANGED_PROFILE) && (
					<Modal title="Edit user profile">
						<ChangedProfileForm />
					</Modal>
				)}
				{checkQueryParam(modalNames.CHANGED_EMAIL) && (
					<Modal title="Edit user email">
						<ChangedEmailForm />
					</Modal>
				)}
				{checkQueryParam(modalNames.CHANGED_PASSWORD) && (
					<Modal title="Edit user password">
						<ChangedPasswordForm />
					</Modal>
				)}
				{checkQueryParam(modalNames.UPLOAD_AVATAR) && (
					<Modal title="Upload new avatar">
						<ChangedAvatarForm />
					</Modal>
				)}
				{checkQueryParam(modalNames.AVATARS) && (
					<Modal title="All user avatars">
						<AllAvatars />
					</Modal>
				)}
				{checkQueryParam(modalNames.DELETE_PROFILE) && (
					<Modal title="Delete profile">
						<Dialog
							successButtonLabel="Delete"
							successCallback={deleteProfile}
							negativeCallback={closeModal}
							isLoading={loading}
							message="Are you sure you want to permanently delete your profile and all associated data? Please be aware that this action is irreversible, and we will not be able to recover your account and information after deletion. All your personal information, uploaded files, and activity history will be lost forever."
						/>
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default ProfilePage
