import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	margin-bottom: 10px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const List = styled(motion.ul)`
	width: 100%;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 50%;
	}
`

export const Item = styled.li`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: end;

	padding: 5px 10px;

	:nth-of-type(even) {
		background-color: #f0fdf0;
	}
`
