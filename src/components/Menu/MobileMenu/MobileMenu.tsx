import { FC } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/UI/Button'
import CloseButton from '@/components/UI/CloseButton'
import Copyright from '@/components/UI/Copyright'
import Logo from '@/components/UI/Logo'
import { useAppSelector } from '@/hooks/useAppSelector'
import { getIsLoggedIn } from '@/store/auth/authSelectors'
import { getUser } from '@/store/user/userSelectors'
import { MenuProps } from '@/types/props/menu/MenuProps'
import { navigationPaths } from '@/utils/data/navigationPaths'

import Navigation from '../Navigation'
import UserBar from '../UserBar'
import { LogoWrapper, Wrapper } from './MobileMenu.styled'

const menuPortal = document.getElementById('menu') as HTMLDivElement

const MobileMenu: FC<MenuProps> = ({ onClose }) => {
	const navigate = useNavigate()
	const isLoggedIn = useAppSelector(getIsLoggedIn)
	const user = useAppSelector(getUser)

	const name = `${user?.firstName} ${user?.lastName}`
	const avatar = user?.avatarUrls?.at(-1)

	return createPortal(
		<Wrapper
			initial={{ x: '-100%' }}
			animate={{ x: ['0%', '1%', '0%'] }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.3 }}
		>
			<CloseButton close={onClose} position={true} top="35px" right="35px" />
			<div>
				<LogoWrapper>
					<Logo variant="light" />
				</LogoWrapper>
				<Navigation onClose={onClose} />
			</div>
			<div>
				{isLoggedIn && user ? (
					<UserBar
						avatar={avatar ?? ''}
						name={name}
						email={user?.email}
						variant="light"
					/>
				) : (
					<Button
						type="button"
						height="45px"
						onClick={() => navigate(navigationPaths.AUTH)}
						margin="0 0 30px"
					>
						start
					</Button>
				)}
				<Copyright />
			</div>
		</Wrapper>,
		menuPortal
	)
}

export default MobileMenu
