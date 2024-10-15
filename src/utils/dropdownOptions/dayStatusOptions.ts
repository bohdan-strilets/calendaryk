import { DayStatus } from '@/types/enums/DayStatus'

export const dayStatusOptions = [
	{
		id: 0,
		value: DayStatus.WORK,
		label: 'Work day',
	},
	{
		id: 1,
		value: DayStatus.DAY_OFF,
		label: 'Day off',
	},
	{
		id: 2,
		value: DayStatus.VACATION,
		label: 'Vacation',
	},
	{
		id: 3,
		value: DayStatus.SICK_LEAVE,
		label: 'Sick leave',
	},
]
