export type MonthProps = {
	month: (undefined[] | Date[])[]
	currentDate?: number
	cellWidth?: string
	cellHeight?: string
	background?: string
	color?: string
	borderRadius?: boolean
}

export type DayCellProps = Pick<
	MonthProps,
	'cellWidth' | 'cellHeight' | 'background' | 'color' | 'borderRadius'
> & {
	currentDay?: boolean
}
