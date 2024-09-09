export type DeyCellProps = {
	currentDate?: number
	day?: Date
	width?: string
	height?: string
	background?: string
	color?: string
	isBorderRadius?: boolean
	selectDate?: (date: Date) => void
	selectedDay?: number
	isInteractive?: boolean
}

export type DayProps = Pick<
	DeyCellProps,
	| 'width'
	| 'height'
	| 'background'
	| 'color'
	| 'isBorderRadius'
	| 'isInteractive'
> & {
	currentDay?: boolean
	selectedDay?: boolean
}
