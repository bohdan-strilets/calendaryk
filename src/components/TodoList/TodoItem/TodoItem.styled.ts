import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { WrapperProps } from '@/types/props/todoList/TodoItemProps'
import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled(motion.li)<WrapperProps>`
	margin-bottom: 10px;
	padding: 8px;

	background-color: ${({ background }) =>
		background ? background : 'rgba(15, 228, 68, 0.3)'};
	border-radius: 5px;

	:last-child {
		margin-bottom: 0;
	}

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 20px;
		padding: 20px;
	}
`

export const TargetDateWrapper = styled.div`
	margin-bottom: 5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		width: 20%;

		margin-bottom: 0;
	}
`

export const DateTime = styled.span`
	margin: 0 10px;
`

export const TaskWrapper = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 45%;
		margin-bottom: 0;
	}
`

export const TaskText = styled.p`
	@media screen and (min-width: ${screenWidth.TABLET}) {
		margin-left: 15px;
	}
`

export const PriorityWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		margin-bottom: 0;
	}
`

export const CreatedDateWrapper = styled.div`
	display: flex;
	align-items: center;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		justify-content: flex-end;
		width: 10%;
	}
`

export const CreatedDateText = styled.div`
	margin-left: 10px;
`
