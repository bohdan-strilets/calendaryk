import { DropdownOption } from '@/types/types/DropdownOption'

export const generateYearOptions = (
	startYear: number,
	endYear: number
): DropdownOption[] => {
	const yearsArray = []

	for (let i = startYear; i <= endYear; i++) {
		yearsArray.push({
			id: i - startYear + 1,
			label: i.toString(),
			value: i.toString(),
		})
	}

	return yearsArray
}
