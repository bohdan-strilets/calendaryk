import { FC } from 'react'

import Logo from '@/components/UI/Logo'
import MenuButton from '@/components/UI/MenuButton'

import Container from '../Container'
import { Line, Wrapper } from './Header.styled'

const Header: FC = () => {
	return (
		<>
			<header>
				<Container>
					<Wrapper>
						<MenuButton />
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
