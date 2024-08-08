import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { RegistrationFormInputs } from '@/types/inputs/RegistrationFormInputs'

export const RegistrationFormSchema = yup.object().shape({
	firstName: yup
		.string()
		.min(2, 'Minimum first name length is 2 characters')
		.max(70, 'Maximum first name length is 70 characters')
		.required('First name is required'),
	lastName: yup
		.string()
		.min(2, 'Minimum last name length is 2 characters')
		.max(70, 'Maximum last name length is 70 characters')
		.required('Last name is required'),
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
	password: yup
		.string()
		.min(6, 'Minimum password length is 6 characters')
		.max(12, 'Maximum password length is 12 characters')
		.required('Password is required'),
})

export const validation = {
	resolver: yupResolver<RegistrationFormInputs>(RegistrationFormSchema),
}
