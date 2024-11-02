import { DayStatus } from '../enums/DayStatus'
import { ShiftNumber } from '../enums/ShiftNumber'

type Dto = {
	status: DayStatus
	numberHours: number
	timeRange: string
	shiftNumber: ShiftNumber
	isAdditional: boolean
	grossEarning: number
	netEarning: number
}

export type UpdateDayDto = {
	dayId: string
	dto: Dto
}
