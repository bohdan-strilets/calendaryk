import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ContactFields } from '@/types/inputs/ContactFields'

export const ContactFormSchema = yup.object().shape({
	name: yup
		.string()
		.required('Name is required')
		.min(2, 'The name must contain at least 2 characters.')
		.max(100, 'The name must not contain more than 100 characters.'),
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
})

export const validation = {
	resolver: yupResolver<ContactFields>(ContactFormSchema),
}
