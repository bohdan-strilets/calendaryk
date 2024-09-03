import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ResendEmailFormInputs } from '@/types/inputs/ResendEmailFormInputs'

export const ResendEmailFormSchema = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
})

export const validation = {
	resolver: yupResolver<ResendEmailFormInputs>(ResendEmailFormSchema),
}
