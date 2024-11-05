import { DayStatus } from '../enums/DayStatus'
import { ShiftNumber } from '../enums/ShiftNumber'

export type AddedDayDto = {
	date: string
	status: DayStatus
	companyId: string
	numberHours?: number
	timeRange?: string
	shiftNumber?: ShiftNumber
	isAdditional?: boolean
	grossEarning?: number
	netEarning?: number
}
