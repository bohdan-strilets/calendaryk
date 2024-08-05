export type CalendarSegmentProps = {
	startRange: Date
	endRange: Date
	cellWidth?: string
	cellHeight?: string
	background?: string
	color?: string
	borderRadius?: boolean
	margin?: string
}

export type WrapperProps = Pick<CalendarSegmentProps, 'margin'>
