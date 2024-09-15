import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { SignInFormFields } from '@/types/inputs/SignInFormFields'

export const LoginFormSchema = yup.object().shape({
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
	resolver: yupResolver<SignInFormFields>(LoginFormSchema),
}
