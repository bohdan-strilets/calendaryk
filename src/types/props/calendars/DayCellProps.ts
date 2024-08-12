export type DeyCellProps = {
	currentDate?: number
	day?: Date
	width?: string
	height?: string
	background?: string
	color?: string
	isBorderRadius?: boolean
}

export type DayProps = Pick<
	DeyCellProps,
	'width' | 'height' | 'background' | 'color' | 'isBorderRadius'
> & {
	currentDay?: boolean
}
