import { FC } from 'react'

import TodoItem from './TodoItem'

export const todos = [
	{
		id: 1,
		targetDate: '2024-08-03T09:30:00.020+00:00',
		isCompleted: true,
		priority: 'low',
		task: 'Buy some milk for coffee.',
		createdAt: '2024-07-26T00:00:00.020+00:00',
	},
	{
		id: 2,
		targetDate: '2024-08-03T12:45:00.020+00:00',
		isCompleted: true,
		priority: 'medium',
		task: 'Wash car outside and clean inside.',
		createdAt: '2024-07-26T00:00:00.020+00:00',
	},
	{
		id: 3,
		targetDate: '2024-08-03T16:00:00.020+00:00',
		isCompleted: false,
		priority: 'high',
		task: 'Go to fitness.',
		createdAt: '2024-07-26T00:00:00.020+00:00',
	},
]

const TodoList: FC = () => {
	return (
		<ul>
			{todos.map((todo, index) => (
				<TodoItem todo={todo} index={index} key={todo.id} />
			))}
		</ul>
	)
}

export default TodoList
