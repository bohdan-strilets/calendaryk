import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { UpdateEmailFormFields } from '@/types/inputs/UpdateEmailFormFields'

export const EmailChangeFormSchema = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
})

export const validation = {
	resolver: yupResolver<UpdateEmailFormFields>(EmailChangeFormSchema),
}
