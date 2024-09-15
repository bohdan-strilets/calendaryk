import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { PasswordRecoveryFields } from '@/types/inputs/PasswordRecoveryFields'

export const PasswordRecoverySchema = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
})

export const validation = {
	resolver: yupResolver<PasswordRecoveryFields>(PasswordRecoverySchema),
}
