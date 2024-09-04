import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { WrapperProps } from '@/types/props/ui/SmallTimerProps'

export const Wrapper = styled(motion.div)<WrapperProps>`
	text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
`

export const Time = styled(motion.span)`
	font-weight: 700;
	color: var(--red-color);
`

export const Message = styled.span`
	font-weight: 700;
`
