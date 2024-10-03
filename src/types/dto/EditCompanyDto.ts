type Dto = {
	name?: string
	startWork?: string
	endWork?: string
	profession?: string
	salaryPerHour?: number
}

export type EditCompanyDto = {
	companyId: string
	dto: Dto
}
