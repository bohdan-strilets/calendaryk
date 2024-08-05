import { FC } from 'react'

import { ButtonProps } from '@/types/props/ui/ButtonProps'

import { Wrapper } from './Button.styled'

const Button: FC<ButtonProps> = ({
	children,
	width,
	height,
	margin,
	variant,
	...props
}) => {
	return (
		<Wrapper
			width={width}
			height={height}
			margin={margin}
			variant={variant}
			{...props}
		>
			{children}
		</Wrapper>
	)
}

export default Button
