import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ResetPasswordFormInputs } from '@/types/inputs/ResetPasswordFormInputs'

export const ResetPasswordFormSchema = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
	password: yup
		.string()
		.min(6, 'Minimum password length is 6 characters')
		.max(12, 'Maximum password length is 12 characters')
		.required('Password is required'),
	passwordAgain: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match')
		.required('Please confirm your password'),
})

export const validation = {
	resolver: yupResolver<ResetPasswordFormInputs>(ResetPasswordFormSchema),
}
