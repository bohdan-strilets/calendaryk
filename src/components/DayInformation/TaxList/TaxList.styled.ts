import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const List = styled(motion.ul)`
	margin: 30px 0;
`

export const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	font-size: 14px;
	padding: 5px 10px;

	:nth-of-type(even) {
		background-color: #fdf0f0;
	}

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 16px;
	}
`
