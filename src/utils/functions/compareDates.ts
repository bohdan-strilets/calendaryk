export const compareDates = (date1: string, date2: string): boolean => {
	const firstDate = new Date(date1)
	const secondDate = new Date(date2)

	return (
		firstDate.getFullYear() === secondDate.getFullYear() &&
		firstDate.getMonth() === secondDate.getMonth() &&
		firstDate.getDate() === secondDate.getDate()
	)
}
