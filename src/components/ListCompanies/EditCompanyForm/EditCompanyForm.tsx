import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import Loader from '@/components/UI/Loader'
import NumberField from '@/components/UI/NumberField'
import TextField from '@/components/UI/TextField'
import useModal from '@/hooks/useModal'
import {
	useGetByIdQuery,
	useUpdateMutation,
} from '@/store/companies/companyApi'
import { EditCompanyFields } from '@/types/inputs/EditCompanyFields'
import { EditCompanyProps } from '@/types/props/listCompanies/EditCompanyProps'
import { isApiError } from '@/utils/functions/isApiError'
import { normalizeDateForDatepicker } from '@/utils/functions/normalizeDateForDatepicker'
import { validation } from '@/validation/EditCompanySchema'

const EditCompanyForm: FC<EditCompanyProps> = ({ companyId }) => {
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<EditCompanyFields>(validation)
	const [updateCompany, { isLoading: isUpdateLoading }] = useUpdateMutation()

	if (!companyId) {
		toast.error('No company ID was provided')
		return null
	}

	const { closeModal } = useModal()
	const { data, isLoading: isQueryLoading } = useGetByIdQuery(companyId)
	const company = data?.data
	const startWorkAtCompany = company?.startWork
		? new Date(company?.startWork)
		: new Date()
	const endWorkAtCompany = company?.endWork
		? new Date(company?.endWork)
		: new Date()

	useEffect(() => {
		const defaultValue = {
			name: company?.name,
			startWork: company?.startWork,
			endWork: company?.endWork,
			salaryPerHour: company?.salaryPerHour,
			profession: company?.profession,
		}

		if (company) reset(defaultValue)
	}, [company, reset])

	const onSubmit: SubmitHandler<EditCompanyFields> = async (data) => {
		const startWork = normalizeDateForDatepicker(data.startWork)
		const endWork = normalizeDateForDatepicker(data.endWork)

		if (companyId) {
			const dto = {
				companyId,
				dto: { ...data, startWork, endWork },
			}

			try {
				await updateCompany(dto)
				closeModal()
				toast.success('The company has been successfully deleted')
			} catch (error) {
				if (isApiError(error)) {
					toast.error(error.message)
				}
			}
		} else {
			toast.error('No company ID was provided')
		}
	}

	const handleStartDateChange = (date: Date) => {
		setValue('startWork', date.toISOString())
	}

	const handleEndDateChange = (date: Date) => {
		setValue('endWork', date.toISOString())
	}

	return !isQueryLoading ? (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField<EditCompanyFields>
				register={register}
				label="Company name"
				name="name"
				type="text"
				height="50px"
				margin="0 0 20px 0"
				placeholder="SampleCo"
				errors={errors}
				rules={{ required: true }}
			/>
			<TextField<EditCompanyFields>
				register={register}
				label="The position you hold"
				name="profession"
				type="text"
				height="50px"
				margin="0 0 20px 0"
				placeholder="Sample Engineer"
				errors={errors}
				rules={{ required: true }}
			/>
			<DatePicker
				onDateChange={handleStartDateChange}
				placeholder="Start"
				label="Start of work in"
				margin="0 0 20px 0"
				defaultValue={startWorkAtCompany}
			/>
			<DatePicker
				onDateChange={handleEndDateChange}
				placeholder="End"
				label="End of work in"
				margin="0 0 20px 0"
				defaultValue={endWorkAtCompany}
			/>
			<NumberField
				register={register}
				label="Your salary per hour"
				name="salaryPerHour"
				height="50px"
				margin="0 0 20px 0"
				placeholder="Salary"
				errors={errors}
				rules={{ required: true, min: 0, max: 500 }}
			/>
			{isUpdateLoading && <Loader margin="25px 0 25px 0" />}
			<Button type="submit" height="45px" disabled={isUpdateLoading}>
				Edit
			</Button>
		</form>
	) : (
		<Loader margin="25px 0 25px 0" />
	)
}

export default EditCompanyForm
