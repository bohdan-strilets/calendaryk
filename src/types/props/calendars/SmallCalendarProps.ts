export type SmallCalendarProps = {
	selectedDate?: Date
	cellWidth?: string
	cellHeight?: string
	borderRadius?: boolean
	background?: string
	color?: string
	selectDate?: (date: Date) => void
	isCurrentDay?: boolean
	selectedDay?: number
	isInteractive?: boolean
	isHeader?: boolean
}
