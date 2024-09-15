import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { VerificationEmailFields } from '@/types/inputs/VerificationEmailFields'

export const ResendEmailDataSchema = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
})

export const validation = {
	resolver: yupResolver<VerificationEmailFields>(ResendEmailDataSchema),
}
