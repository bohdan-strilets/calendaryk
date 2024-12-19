import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'

import Auth from '@/components/Auth'
import ForgotPasswordForm from '@/components/Auth/ForgotPasswordForm'
import ResendEmailForm from '@/components/Auth/ResendEmailForm'
import Welcome from '@/components/Auth/Welcome'
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
				{checkQueryParam(modalNames.WELCOME) && (
					<Modal title="Welcome to schedule">
						<Welcome />
					</Modal>
				)}
				{checkQueryParam(modalNames.RESEND_EMAIL) && (
					<Modal title="Resend Activation Email">
						<ResendEmailForm />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default AuthPage
