import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'

import Modal from '@/components/Modal'
import Profile from '@/components/Profile'
import ChangedProfileForm from '@/components/Profile/ChangedProfileForm'
import useModal from '@/hooks/useModal'

const ProfilePage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()

	return (
		<>
			<Profile />
			<AnimatePresence>
				{checkQueryParam(modalNames.CHANGED_PROFILE) && (
					<Modal title="Edit user profile">
						<ChangedProfileForm />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default ProfilePage
