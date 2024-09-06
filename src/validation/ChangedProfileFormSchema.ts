import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Gender } from '@/types/enums/Gender'
import { ChangedProfileFormInputs } from '@/types/inputs/ChangedProfileFormInputs'

export const ChangedProfileFormSchema = yup.object().shape({
	firstName: yup
		.string()
		.min(2, 'Minimum first name length is 2 characters')
		.max(70, 'Maximum first name length is 70 characters'),
	lastName: yup
		.string()
		.min(2, 'Minimum last name length is 2 characters')
		.max(70, 'Maximum last name length is 70 characters'),
	dateBirth: yup.string(),
	gender: yup
		.mixed<Gender>()
		.oneOf(Object.values(Gender), 'Please select one of the available options'),
})

export const validation = {
	resolver: yupResolver<ChangedProfileFormInputs>(ChangedProfileFormSchema),
}
