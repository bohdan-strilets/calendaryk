import styled from '@emotion/styled'

import { ImageProps } from '@/types/props/ui/AvatarProps'

export const Image = styled.div<ImageProps>`
	min-width: ${({ width }) => (width ? width : '40px')};
	height: ${({ height }) => (height ? height : '40px')};
	margin: ${({ margin }) => (margin ? margin : '')};

	border-radius: ${({ border }) => (border ? '8px' : '')};
	border: ${({ border }) => (border ? '3px solid var(--white-color)' : '')};

	background-color: var(--gray-color);
	background: ${({ imageUrl }) => `url(${imageUrl})`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: ${({ backgroundSize }) =>
		backgroundSize ? backgroundSize : 'cover'};
`
