import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Menu from '@/components/Menu'
import MobileMenu from '@/components/Menu/MobileMenu'
import UserBar from '@/components/Menu/UserBar'
import Button from '@/components/UI/Button'
import Logo from '@/components/UI/Logo'
import MenuButton from '@/components/UI/MenuButton'
import { useAppSelector } from '@/hooks/useAppSelector'
import useMenu from '@/hooks/useMenu'
import useResponsive from '@/hooks/useResponsive'
import { getIsLoggedIn } from '@/store/auth/authSelectors'
import { navigationPaths } from '@/utils/data/navigationPaths'

import Container from '../Container'
import { Line, Wrapper } from './Header.styled'

const Header: FC = () => {
	const { isOpen, onOpen, onClose, onBackdropClick } = useMenu()
	const { isMaxTablet } = useResponsive()
	const navigate = useNavigate()
	const isLoggedIn = useAppSelector(getIsLoggedIn)

	return (
		<>
			<header>
				<Container>
					<Wrapper>
						<MenuButton open={onOpen} />
						<Logo variant="dark" />
						{isLoggedIn ? (
							<UserBar
								avatar="https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1721237072~exp=1721240672~hmac=e84f496283b7df26ebf24097e50947f557458567326e1cc0906b73246ccfa40d&w=826"
								name="Bohdan Strilets"
								email="bohdan.strilets@gmail.com"
							/>
						) : (
							<Button
								type="button"
								width="180px"
								height="45px"
								onClick={() => navigate(navigationPaths.AUTH)}
							>
								start
							</Button>
						)}
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
