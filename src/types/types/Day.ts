import { DayStatus } from '../enums/DayStatus'
import { ShiftNumber } from '../enums/ShiftNumber'

export type Day = {
	_id: string
	owner: string
	companyId: string
	date: Date
	status: DayStatus
	isAdditional: boolean
	numberHours?: number
	timeRange?: string
	shiftNumber?: ShiftNumber
	grossEarning?: number
	netEarning?: number
	updatedAt: string
	createdAt: string
}
