import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

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

export const Image = styled.div<{ url: string }>`
	width: 100%;
	height: 100%;

	background-color: var(--gray-color);
	background-image: ${({ url }) => `url(${url})`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	cursor: pointer;
	transition: transform var(--hover-effect);

	:hover,
	:focus {
		transform: scale(1.02);
	}
`

export const PreviewWrapper = styled(motion.div)`
	position: relative;
`

export const CollapseButton = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 40px;
	height: 40px;

	background-color: var(--gray-color);
	color: var(--white-color);

	cursor: pointer;
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--green-color);
	}

	:active {
		transform: scale(0.95);
	}
`
