import { FC } from 'react'
import { BsClockFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { GoGoal } from 'react-icons/go'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { MdCreate } from 'react-icons/md'

import { TodoItemProps } from '@/types/props/todoList/TodoItemProps'
import { getRandomColorRGBA } from '@/utils/functions/getRandomColorRGBA'
import { parseDateTime } from '@/utils/functions/parseDateTime'

import Priority from '../Priority'
import {
	CreatedDateText,
	CreatedDateWrapper,
	DateTime,
	TargetDateWrapper,
	TaskText,
	TaskWrapper,
	Wrapper,
} from './TodoItem.styled'

const TodoItem: FC<TodoItemProps> = ({ todo, index }) => {
	const { createdAt, isCompleted, priority, targetDate, task } = todo
	const goalDate = parseDateTime(targetDate)
	const cratedDate = parseDateTime(createdAt)

	return (
		<Wrapper
			initial={{ y: '-100%', opacity: 0 }}
			animate={{ y: '0', opacity: 1 }}
			transition={{ duration: 0.3, delay: 0.3 * index }}
			background={getRandomColorRGBA(0.2)}
		>
			<TargetDateWrapper>
				<FaCalendarAlt />
				<DateTime>{goalDate.date}</DateTime>
				<BsClockFill />
				<DateTime>{goalDate.time}</DateTime>
			</TargetDateWrapper>
			<TaskWrapper>
				<GoGoal size={22} color="var(--red-color)" />
				<TaskText>{task}</TaskText>
			</TaskWrapper>
			<Priority priority={priority} />
			{isCompleted ? (
				<ImCheckboxChecked color="var(--green-color)" />
			) : (
				<ImCheckboxUnchecked color="var(--green-color)" />
			)}
			<CreatedDateWrapper>
				<MdCreate />
				<CreatedDateText>{cratedDate.date}</CreatedDateText>
			</CreatedDateWrapper>
		</Wrapper>
	)
}

export default TodoItem
