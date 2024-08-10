import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ForgotPasswordInputs } from '@/types/inputs/ForgotPasswordInputs'

export const ForgotPasswordSchema = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
})

export const validation = {
	resolver: yupResolver<ForgotPasswordInputs>(ForgotPasswordSchema),
}
