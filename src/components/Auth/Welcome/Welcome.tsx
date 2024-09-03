import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import useModal from '@/hooks/useModal'
import { navigationPaths } from '@/utils/data/navigationPaths'

import ButtonLink from '../../UI/ButtonLink'
import Title from '../../UI/Title'
import { List } from './Welcome.styled'

const Welcome: FC = () => {
	const navigate = useNavigate()
	const { closeModal, openModal, modalNames } = useModal()

	const toProfile = () => {
		closeModal()
		navigate(`/${navigationPaths.PROFILE}`)
	}

	return (
		<div>
			<p style={{ marginBottom: '10px' }}>
				We're excited to have you join our community! Your account has been
				successfully registered.
			</p>
			<Title fontSize={20} type="h2" textAlign="start" variant="black">
				What's next?
			</Title>
			<List>
				<li>
					<p style={{ fontWeight: 700 }}>Confirm your email.</p>
					<p>
						We've sent a confirmation email to your inbox. Please check your
						email and follow the instructions to activate your account.
					</p>
				</li>
				<li>
					<p style={{ fontWeight: 700 }}>Complete your profile.</p>
					<p>
						After activating your account, we recommend filling out the
						remaining information in your profile. This will help you make the
						most of our website's features.
					</p>
				</li>
			</List>
			<p
				style={{
					marginBottom: '10px',
					fontWeight: 700,
					color: 'var(--red-color)',
				}}
			>
				Didn’t receive the email? No problem! Just click{' '}
				<ButtonLink
					width="auto"
					variant="gray"
					onClick={() => openModal(modalNames.RESEND_EMAIL)}
				>
					here
				</ButtonLink>{' '}
				to request a new one.
			</p>

			<p style={{ marginBottom: '10px' }}>
				If you have any questions or need assistance, our support team is always
				here to help!
			</p>

			<ButtonLink margin="0 0 20px 0" onClick={toProfile}>
				Complete your profile.
			</ButtonLink>

			<p>Thank you again for registering, and welcome aboard!</p>
			<p>
				Best regards, The{' '}
				<span style={{ color: 'var(--red-color)', fontWeight: 700 }}>
					SCHEDULE
				</span>{' '}
				Team
			</p>
		</div>
	)
}

export default Welcome
