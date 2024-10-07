import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { WrapperProps } from '@/types/props/ui/datePicker/DatePickerProps'

export const Wrapper = styled.div<WrapperProps>`
	margin: ${({ margin }) => (margin ? margin : '')};
`

export const Picker = styled(motion.div)`
	position: relative;

	width: 100%;
	padding: 15px;
	margin-top: 15px;

	background-color: var(--white-color);
	border-radius: 3px;
	box-shadow: var(--box-shadow);
`
