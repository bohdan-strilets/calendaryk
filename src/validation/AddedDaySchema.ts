import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { DayStatus } from '@/types/enums/DayStatus'
import { AddedDayFields } from '@/types/inputs/AddedDayFields'

export const AddedDaySchema = yup.object().shape({
	dayStatus: yup
		.string()
		.oneOf(Object.values(DayStatus), 'Invalid status value')
		.required(),
	start: yup.string(),
	end: yup.string(),
	isAdditional: yup.boolean().required(),
})

export const validation = {
	resolver: yupResolver<AddedDayFields>(AddedDaySchema),
}
