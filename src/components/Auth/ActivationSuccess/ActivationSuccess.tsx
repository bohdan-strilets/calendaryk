import { FC } from 'react'

import medalPng from '@/assets/medal/medal.png'
import Button from '@/components/UI/Button'
import Title from '@/components/UI/Title'
import useResponsive from '@/hooks/useResponsive'

import { Image, List, Text } from './ActivationSuccess.styled'

const ActivationSuccess: FC = () => {
	const { isMaxMobile, isMaxTablet } = useResponsive()

	return (
		<>
			<Title fontSize={34} type="h1" textAlign="center" margin="0 0 30px 0">
				Congratulations
			</Title>
			<Text>
				Thank you for confirming your email. Now you can use all the features of
				our site!
			</Text>
			<Image
				src={medalPng}
				alt="Medal on transparent background"
				width={300}
				height={300}
			/>
			<List>
				<li>
					<Button
						type="button"
						width={!isMaxMobile && isMaxTablet ? '230px' : '280px'}
						variant="black"
					>
						Home
					</Button>
				</li>
				<li>
					<Button
						type="button"
						width={!isMaxMobile && isMaxTablet ? '230px' : '280px'}
						variant="black"
						margin={isMaxMobile ? '15px 0 15px 0' : ''}
					>
						Calendar
					</Button>
				</li>
				<li>
					<Button
						type="button"
						width={!isMaxMobile && isMaxTablet ? '230px' : '280px'}
						variant="black"
					>
						Profile
					</Button>
				</li>
			</List>
		</>
	)
}

export default ActivationSuccess
