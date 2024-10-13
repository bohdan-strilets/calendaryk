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
	isBorder?: boolean
	textPosition?: 'center' | 'topLeft'
}

export type DayProps = Pick<
	DeyCellProps,
	| 'width'
	| 'height'
	| 'background'
	| 'color'
	| 'isBorderRadius'
	| 'isInteractive'
	| 'isBorder'
	| 'textPosition'
> & {
	currentDay?: boolean
	selectedDay?: boolean
}
