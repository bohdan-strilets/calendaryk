import { FC } from 'react'

import { ButtonLinkProps } from '@/types/props/ui/ButtonLinkProps'

import { Button } from './ButtonLink.styled'

const ButtonLink: FC<ButtonLinkProps> = ({
	children,
	onClick,
	textAlign,
	width,
	height,
	margin,
	variant,
}) => {
	return (
		<Button
			type="button"
			onClick={onClick}
			textAlign={textAlign}
			width={width}
			height={height}
			margin={margin}
			variant={variant}
		>
			{children}
		</Button>
	)
}

export default ButtonLink
