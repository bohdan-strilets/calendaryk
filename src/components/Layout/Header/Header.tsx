import { FC } from 'react'

import Logo from '@/components/UI/Logo'

import Container from '../Container'
import { Line, Wrapper } from './Header.styled'

const Header: FC = () => {
	return (
		<>
			<header>
				<Container>
					<Wrapper>
						<p>menu</p>
						<Logo />
						<p>user</p>
					</Wrapper>
				</Container>
			</header>
			<Line />
		</>
	)
}

export default Header
