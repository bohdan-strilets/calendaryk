import { AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'

import useResponsive from '@/hooks/useResponsive'

import Button from '../UI/Button'

import {
	Accent,
	Greetings,
	LeftSide,
	RightSide,
	Text,
	Wrapper,
} from './Auth.styled'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const Auth: FC = () => {
	const [authState, setAuthState] = useState<'log' | 'reg'>('log')

	const { isMaxTablet } = useResponsive()

	const changeAuthForm = () => {
		if (authState === 'log') {
			setAuthState('reg')
		} else {
			setAuthState('log')
		}
	}

	const responsiveAnimation = isMaxTablet ? 'y' : 'x'

	return (
		<Wrapper>
			<AnimatePresence>
				<LeftSide
					key="leftSide"
					initial={{ [responsiveAnimation]: 0, opacity: 0 }}
					animate={
						authState === 'log'
							? { [responsiveAnimation]: '0%', opacity: 1 }
							: { [responsiveAnimation]: '100%', opacity: 1 }
					}
					exit={{ [responsiveAnimation]: 0, opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Greetings>
						{authState === 'log' ? 'welcome to' : 'welcome back to'}
					</Greetings>
					<Accent>schedule</Accent>
					<Text>
						{authState === 'log' ? 'New here?' : 'Already have an account?'}
					</Text>
					<Button
						type="button"
						width="280px"
						variant="black"
						onClick={changeAuthForm}
					>
						{authState === 'log' ? 'registration' : 'login'}
					</Button>
				</LeftSide>
				<RightSide
					key="rightSide"
					initial={{ [responsiveAnimation]: '-100%', opacity: 0 }}
					animate={
						authState === 'log'
							? { [responsiveAnimation]: '0%', opacity: 1 }
							: { [responsiveAnimation]: '-100%', opacity: 1 }
					}
					exit={{ [responsiveAnimation]: '-100%', opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					{authState === 'log' ? <LoginForm /> : <RegistrationForm />}
				</RightSide>
			</AnimatePresence>
		</Wrapper>
	)
}

export default Auth
