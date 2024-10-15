import { DayStatus } from '../enums/DayStatus'

export type AddedDayFields = {
	dayStatus: DayStatus
	start?: string
	end?: string
	isAdditional: boolean
}
