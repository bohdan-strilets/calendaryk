import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'

import Menu from '@/components/Menu'
import MobileMenu from '@/components/Menu/MobileMenu'
import Button from '@/components/UI/Button'
import Logo from '@/components/UI/Logo'
import MenuButton from '@/components/UI/MenuButton'
import useMenu from '@/hooks/useMenu'
import useResponsive from '@/hooks/useResponsive'

import Container from '../Container'
import { Line, Wrapper } from './Header.styled'

const Header: FC = () => {
	const { isOpen, open, close } = useMenu()
	const { isMaxTablet } = useResponsive()

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

			<AnimatePresence>
				{!isMaxTablet && isOpen && <Menu close={close} />}
				{isMaxTablet && isOpen && <MobileMenu close={close} />}
			</AnimatePresence>
		</>
	)
}

export default Header
