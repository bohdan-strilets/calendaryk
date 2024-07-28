export type WeekDaysProps = {
	currentDay?: number
	cellWidth?: string
	cellHeight?: string
}

export type DayNameProps = Pick<WeekDaysProps, 'cellWidth' | 'cellHeight'> & {
	currentDay?: boolean
}
