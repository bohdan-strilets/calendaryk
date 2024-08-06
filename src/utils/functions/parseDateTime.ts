import { DateTime } from '@/types/types/DateTime'

export const parseDateTime = (dateTimeString: string): DateTime => {
	const dateObj = new Date(dateTimeString)

	const date = dateObj.toISOString().split('T')[0]
	const time = dateObj.toISOString().split('T')[1].split('.')[0]

	const formattedDate = date.replaceAll('-', '.').split('.').reverse().join('.')
	const formattedTime = time.slice(0, 5)

	return { date: formattedDate, time: formattedTime }
}
