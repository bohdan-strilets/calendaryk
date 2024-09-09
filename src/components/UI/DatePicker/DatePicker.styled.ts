import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { ImCalendar } from 'react-icons/im'

import { WrapperProps } from '@/types/props/ui/DatePickerProps'
import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div<WrapperProps>`
	margin: ${({ margin }) => (margin ? margin : '')};
`

export const Label = styled.p`
	font-weight: 600;
`

export const Input = styled.div`
	width: 100%;

	background-color: var(--white-color);
	border-radius: 3px;
	box-shadow: var(--box-shadow);

	cursor: pointer;

	:hover .calendar-icon,
	:focus .calendar-icon {
		color: var(--green-color);
	}
`

export const Group = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	min-height: 50px;
	padding: 0 10px;
`

export const CalendarIcon = styled(ImCalendar)``

export const Picker = styled(motion.div)`
	width: 100%;
	padding: 0 10px 10px 10px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		justify-content: space-between;
	}
`
