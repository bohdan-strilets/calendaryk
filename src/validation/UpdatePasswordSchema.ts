import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { PasswordUpdateFields } from '@/types/inputs/PasswordUpdateFields'

export const UpdatePasswordSchema = yup.object().shape({
	currentPassword: yup
		.string()
		.min(6, 'Minimum password length is 6 characters')
		.max(12, 'Maximum password length is 12 characters')
		.required('Password is required'),
	newPassword: yup
		.string()
		.min(6, 'Minimum password length is 6 characters')
		.max(12, 'Maximum password length is 12 characters')
		.required('Password is required'),
	newPasswordAgain: yup
		.string()
		.min(6, 'Minimum password length is 6 characters')
		.max(12, 'Maximum password length is 12 characters')
		.required('Password is required')
		.oneOf([yup.ref('newPassword')], 'Passwords must match'),
})

export const validation = {
	resolver: yupResolver<PasswordUpdateFields>(UpdatePasswordSchema),
}
