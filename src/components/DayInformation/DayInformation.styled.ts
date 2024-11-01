import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const Footer = styled(motion.div)`
	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`
