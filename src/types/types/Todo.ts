export type Todo = {
	id: number
	targetDate: string
	isCompleted: boolean
	priority: 'low' | 'medium' | 'high' | string
	task: string
	createdAt: string
}
