import { Day } from '@/types/types/Day'

export type CalendarProps = {
	getDate: (date: Date) => void
	daysForCurrentMonth?: Day[] | []
}
