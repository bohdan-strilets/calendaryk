import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'

import Auth from '@/components/Auth'
import ForgotPasswordForm from '@/components/Auth/ForgotPasswordForm'
import Modal from '@/components/Modal'
import useModal from '@/hooks/useModal'

const AuthPage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()

	return (
		<>
			<Auth />
			<AnimatePresence>
				{checkQueryParam(modalNames.FORGOT_PASSWORD) && (
					<Modal title="Forgot your password?">
						<ForgotPasswordForm />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default AuthPage
