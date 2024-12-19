import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import darkLogoPng from '@/assets/logo/logo-dark.png'
import lightLogoPng from '@/assets/logo/logo-light.png'

import { navigationPaths } from '@/utils/data/navigationPaths'

import { LogoProps } from '@/types/props/ui/LogoProps'

import { Button, Image } from './Logo.styled'

const Logo: FC<LogoProps> = ({ variant }) => {
	const navigate = useNavigate()

	return (
		<Button type="button" onClick={() => navigate(navigationPaths.HOME)}>
			<Image
				src={variant === 'dark' ? darkLogoPng : lightLogoPng}
				alt="Your schedule - logo"
			/>
		</Button>
	)
}

export default Logo
