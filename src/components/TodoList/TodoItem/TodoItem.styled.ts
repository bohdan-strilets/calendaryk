import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { WrapperProps } from '@/types/props/TodoItemProps'

export const Wrapper = styled(motion.li)<WrapperProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 20px;
	padding: 20px;

	background-color: ${({ background }) =>
		background ? background : 'rgba(15, 228, 68, 0.3)'};
	border-radius: 5px;

	:last-child {
		margin-bottom: 0;
	}
`

export const TargetDateWrapper = styled.div`
	display: flex;
	align-items: center;

	width: 20%;
`

export const DateTime = styled.span`
	margin: 0 10px;
`

export const TaskWrapper = styled.div`
	display: flex;
	align-items: center;

	width: 45%;
`

export const TaskText = styled.p`
	margin-left: 15px;
`

export const CreatedDateWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	width: 10%;
`

export const CreatedDateText = styled.div`
	margin-left: 10px;
`
