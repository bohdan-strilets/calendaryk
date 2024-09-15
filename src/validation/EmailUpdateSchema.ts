import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { EmailUpdateFields } from '@/types/inputs/EmailUpdateFields'

export const EmailUpdateSchema = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
})

export const validation = {
	resolver: yupResolver<EmailUpdateFields>(EmailUpdateSchema),
}
