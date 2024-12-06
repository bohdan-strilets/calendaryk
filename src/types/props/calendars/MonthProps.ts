import { Day } from '@/types/types/Day'

import { DeyCellProps } from './DayCellProps'

export type MonthProps = {
	month: (undefined[] | Date[])[]
	currentDate?: number
	cellWidth?: string
	cellHeight?: string
	background?: string
	color?: string
	borderRadius?: boolean
	selectDate?: (date: Date) => void
	selectedDay?: number
	isInteractive?: boolean
	daysForCurrentMonth?: Day[] | []
} & Pick<DeyCellProps, 'isBorder' | 'textPosition' | 'callback'>
