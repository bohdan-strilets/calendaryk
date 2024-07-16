import { FC } from 'react'

import Button from '@/components/UI/Button'
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
						<Button type="button" width="180px" height="45px">
							start
						</Button>
					</Wrapper>
				</Container>
			</header>
			<Line />
		</>
	)
}

export default Header
