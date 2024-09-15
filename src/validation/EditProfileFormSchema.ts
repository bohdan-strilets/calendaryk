import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Gender } from '@/types/enums/Gender'
import { ProfileEditFormFields } from '@/types/inputs/ProfileEditFormFields'

export const EditProfileFormSchema = yup.object().shape({
	firstName: yup
		.string()
		.min(2, 'Minimum first name length is 2 characters')
		.max(70, 'Maximum first name length is 70 characters'),
	lastName: yup
		.string()
		.min(2, 'Minimum last name length is 2 characters')
		.max(70, 'Maximum last name length is 70 characters'),
	dateBirth: yup.string(),
	gender: yup.string().oneOf(Object.values(Gender), 'Invalid gender value'),
})

export const validation = {
	resolver: yupResolver<ProfileEditFormFields>(EditProfileFormSchema),
}
