import { DayStatus } from '@/types/enums/DayStatus'
import { ShiftNumber } from '@/types/enums/ShiftNumber'

export type InformationProps = {
	dayStatus: DayStatus
	numberHours: number
	date: string
	timeRange: string
	numberShift: ShiftNumber
	isAdditionalHours: boolean
}
