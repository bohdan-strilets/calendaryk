import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { EditCompanyFields } from '@/types/inputs/EditCompanyFields'

export const EditCompanySchema = yup.object().shape({
	name: yup
		.string()
		.min(5, 'Name should be at least 5 characters')
		.max(50, 'Name should not exceed 50 characters'),

	startWork: yup.string(),
	endWork: yup.string(),
	salaryPerHour: yup
		.number()
		.typeError('Salary must be a number')
		.positive('Salary per hour must be greater than zero')
		.min(0, 'Salary cannot be less than 0')
		.max(500, 'Salary cannot exceed 500'),
	profession: yup
		.string()
		.min(5, 'Profession should be at least 5 characters')
		.max(60, 'Profession should not exceed 60 characters'),
})

export const validation = {
	resolver: yupResolver<EditCompanyFields>(EditCompanySchema),
}
