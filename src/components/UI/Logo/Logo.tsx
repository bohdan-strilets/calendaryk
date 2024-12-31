import { FC } from 'react'

import useResponsive from '@/hooks/useResponsive'

import { Bounce } from '@/utils/animations/Bounce'
import { navigationPaths } from '@/utils/data/navigationPaths'

import { LogoProps } from '@/types/props/ui/LogoProps'

import {
	AccentLetter,
	Body,
	FirstText,
	Header,
	Icon,
	Line,
	SecondText,
	StyledLink,
} from './Logo.styled'

const Logo: FC<LogoProps> = ({ variant }) => {
	const { isMaxTablet } = useResponsive()

	return (
		<StyledLink to={navigationPaths.HOME} variant={variant}>
			<FirstText variant={variant}>Your</FirstText>
			<SecondText className="second-text">
				Sched
				<AccentLetter variant={variant} {...Bounce()}>
					u
				</AccentLetter>
				le
			</SecondText>
			<Icon>
				<Header>
					<Line left={isMaxTablet ? '12px' : '15px'} bg="#3f3f3f" />
					<Line left={isMaxTablet ? '24px' : '30px'} bg="#262626" />
					<Line left={isMaxTablet ? '36px' : '45px'} bg="#000000" />
				</Header>
				<Body />
			</Icon>
		</StyledLink>
	)
}

export default Logo
