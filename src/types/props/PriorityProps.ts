import { Todo } from '../types/Todo'

export type PriorityProps = Pick<Todo, 'priority'>

export type WrapperProps = Pick<PriorityProps, 'priority'>
