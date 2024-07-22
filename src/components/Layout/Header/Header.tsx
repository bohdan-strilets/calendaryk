import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'

import Menu from '@/components/Menu'
import Button from '@/components/UI/Button'
import Logo from '@/components/UI/Logo'
import MenuButton from '@/components/UI/MenuButton'
import useMenu from '@/hooks/useMenu'

import Container from '../Container'
import { Line, Wrapper } from './Header.styled'

const Header: FC = () => {
	const { isOpen, open, close } = useMenu()

	return (
		<>
			<header>
				<Container>
					<Wrapper>
						<MenuButton open={open} />
						<Logo variant="dark" />
						<Button type="button" width="180px" height="45px">
							start
						</Button>
					</Wrapper>
				</Container>
			</header>
			<Line />

			<AnimatePresence>{isOpen && <Menu close={close} />}</AnimatePresence>
		</>
	)
}

export default Header
