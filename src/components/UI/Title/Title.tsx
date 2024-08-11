import { FC } from 'react'

import { TitleProps } from '@/types/props/ui/TitleProps'

import { StyledTag } from './Title.styled'

const Title: FC<TitleProps> = ({
	children,
	type: Tag = 'h1',
	fontSize,
	textAlign = 'start',
	variant = 'gray',
	margin,
}) => {
	return (
		<StyledTag
			as={Tag}
			fontSize={fontSize}
			textAlign={textAlign}
			variant={variant}
			margin={margin}
		>
			{children}
		</StyledTag>
	)
}

export default Title
