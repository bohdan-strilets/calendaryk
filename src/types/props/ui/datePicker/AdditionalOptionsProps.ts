import { MonthYear } from '@/types/types/MonthYear'

export type AdditionalOptionsProps = {
	monthYear: MonthYear
	getMonth: (month: string) => void
	getYear: (year: string) => void
}
