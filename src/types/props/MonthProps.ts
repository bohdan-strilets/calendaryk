export type MonthProps = {
	month: (undefined[] | Date[])[]
	currentDate: number
	cellWidth?: string
	cellHeight?: string
}

export type DayCellProps = Pick<MonthProps, 'cellWidth' | 'cellHeight'> & {
	currentDay?: boolean
}
