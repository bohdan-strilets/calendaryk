import { FC } from 'react'
import { createPortal } from 'react-dom'

import CloseButton from '@/components/UI/CloseButton'
import Copyright from '@/components/UI/Copyright'
import Logo from '@/components/UI/Logo'
import { MenuProps } from '@/types/props/menu/MenuProps'

import Navigation from '../Navigation'
import UserBar from '../UserBar'
import { LogoWrapper, Wrapper } from './MobileMenu.styled'

const menuPortal = document.getElementById('menu') as HTMLDivElement

const MobileMenu: FC<MenuProps> = ({ onClose }) => {
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
				<UserBar
					avatar="https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1721237072~exp=1721240672~hmac=e84f496283b7df26ebf24097e50947f557458567326e1cc0906b73246ccfa40d&w=826"
					name="Bohdan Strilets"
					email="bohdan.strilets@gmail.com"
				/>

				<Copyright />
			</div>
		</Wrapper>,
		menuPortal
	)
}

export default MobileMenu
