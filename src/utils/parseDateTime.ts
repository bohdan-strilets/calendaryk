import { DateTime } from '@/types/types/DateTime'

export const parseDateTime = (dateTimeString: string): DateTime => {
	const dateObj = new Date(dateTimeString)

	const date = dateObj.toISOString().split('T')[0]
	const time = dateObj.toISOString().split('T')[1].split('.')[0]

	return { date, time }
}
