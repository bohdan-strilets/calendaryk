import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import logoPng from '@/assets/logo.png'
import { navigationPaths } from '@/utils/navigationPaths'

import { Button, Image } from './Logo.styled'

const Logo: FC = () => {
	const navigate = useNavigate()

	return (
		<Button type="button" onClick={() => navigate(navigationPaths.HOME)}>
			<Image src={logoPng} alt="Your schedule - logo" />
		</Button>
	)
}

export default Logo
