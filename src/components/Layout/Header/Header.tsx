import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Menu from '@/components/Menu'
import MobileMenu from '@/components/Menu/MobileMenu'
import Button from '@/components/UI/Button'
import Logo from '@/components/UI/Logo'
import MenuButton from '@/components/UI/MenuButton'
import useMenu from '@/hooks/useMenu'
import useResponsive from '@/hooks/useResponsive'
import { navigationPaths } from '@/utils/data/navigationPaths'

import Container from '../Container'
import { Line, Wrapper } from './Header.styled'

const Header: FC = () => {
	const { isOpen, onOpen, onClose, onBackdropClick } = useMenu()
	const { isMaxTablet } = useResponsive()
	const navigate = useNavigate()

	return (
		<>
			<header>
				<Container>
					<Wrapper>
						<MenuButton open={onOpen} />
						<Logo variant="dark" />
						<Button
							type="button"
							width="180px"
							height="45px"
							onClick={() => navigate(navigationPaths.AUTH)}
						>
							start
						</Button>
					</Wrapper>
				</Container>
			</header>
			<Line />

			<AnimatePresence>
				{!isMaxTablet && isOpen && (
					<Menu onClose={onClose} onBackdropClick={onBackdropClick} />
				)}
				{isMaxTablet && isOpen && (
					<MobileMenu onClose={onClose} onBackdropClick={onBackdropClick} />
				)}
			</AnimatePresence>
		</>
	)
}

export default Header
