type Dto = {
	name?: string
	startWork?: string
	endWork?: string
	profession?: string
	salaryPerHour?: number
}

export type UpdateTodoDto = {
	companyId: string
	dto: Dto
}
