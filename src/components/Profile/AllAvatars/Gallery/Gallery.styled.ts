import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { ImageProps } from '@/types/props/allAvatars/GalleryProps'
import { screenWidth } from '@/utils/data/screenWidth'

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;

	gap: 5px;
	padding: 0;
`

export const Item = styled(motion.li)`
	flex: 1 1 100%;
	box-sizing: border-box;
	max-width: 100%;
	height: 200px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		flex: 1 1 calc(33% - 5px);
		max-width: calc(33% - 5px);
	}
`

export const Image = styled.div<ImageProps>`
	position: relative;

	width: 100%;
	height: 100%;

	background-color: var(--gray-color);
	background-image: ${({ url }) => `url(${url})`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	cursor: pointer;
	transition: transform var(--hover-effect);

	:hover .actions-dropdown,
	:focus .actions-dropdown {
		opacity: 1;
	}
`
