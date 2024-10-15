export const generateHoursOptions = () => {
	const start = 0
	const end = 23
	const result = []

	for (let index = start; index <= end; index++) {
		const parsedIndex = index.toString().padStart(2, '0')
		const element = {
			id: index,
			value: `${parsedIndex}:00`,
			label: `${parsedIndex}:00`,
		}
		result.push(element)
	}

	return result
}
