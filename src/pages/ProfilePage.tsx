import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'

import Modal from '@/components/Modal'
import Profile from '@/components/Profile'
import ChangedEmailForm from '@/components/Profile/ChangedEmailForm'
import ChangedPasswordForm from '@/components/Profile/ChangedPasswordForm'
import ChangedProfileForm from '@/components/Profile/ChangedProfileForm'
import useModal from '@/hooks/useModal'

const ProfilePage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()

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
			</AnimatePresence>
		</>
	)
}

export default ProfilePage
