import { ReactNode } from 'react'

import { ShiftNumber } from '@/types/enums/ShiftNumber'

export type EventSummaryCellProps = {
	children: ReactNode
	shiftNumber: ShiftNumber
	numberHours: number
	isAdditionalHours: boolean
	numberTodo: number
}
