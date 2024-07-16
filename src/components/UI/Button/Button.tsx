import { FC } from 'react'

import { ButtonProps } from '@/types/props/ButtonProps'

import { Wrapper } from './Button.styled'

const Button: FC<ButtonProps> = ({
	children,
	width,
	height,
	margin,
	...props
}) => {
	return (
		<Wrapper width={width} height={height} margin={margin} {...props}>
			{children}
		</Wrapper>
	)
}

export default Button
