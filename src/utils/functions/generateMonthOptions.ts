import { DropdownOption } from '@/types/types/DropdownOption'

import { MonthsOfYear } from '../data/monthsOfYear'

export const generateMonthOptions = (): DropdownOption[] => {
	const options: DropdownOption[] = []

	MonthsOfYear.map(({ id, name }) => {
		const numberMonth = id.toString()
		const option = { id, value: numberMonth, label: name }
		options.push(option)
	})

	return options
}
