import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import Checkbox from '@/components/UI/Checkbox'
import DatePicker from '@/components/UI/DatePicker'
import Loader from '@/components/UI/Loader'
import NumberField from '@/components/UI/NumberField'
import TextField from '@/components/UI/TextField'
import useModal from '@/hooks/useModal'
import { useCreateMutation } from '@/store/companies/companyApi'
import { AddedCompanyFields } from '@/types/inputs/AddedCompanyFields'
import { isApiError } from '@/utils/functions/isApiError'
import { normalizeDate } from '@/utils/functions/normalizeDate'
import { validation } from '@/validation/AddedCompanySchema'

const AddedCompanyForm: FC = () => {
	const [isStillWorking, setIsStillWorking] = useState(true)

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm<AddedCompanyFields>(validation)
	const [createCompany, { isLoading }] = useCreateMutation()
	const { closeModal } = useModal()

	useEffect(() => {
		reset({ isStillWorking })
	}, [])

	const onSubmit: SubmitHandler<AddedCompanyFields> = async (data) => {
		try {
			const isStillWorking = data.isStillWorking
				? new Date().toISOString()
				: data.endWork

			const dto = { ...data, endWork: isStillWorking }
			await createCompany(dto)
			closeModal()
			toast.success('The company has been successfully added')
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.message)
			}
		}
	}

	const handleStartDateChange = (date: Date) => {
		const isoDate = date.toISOString()
		const start = normalizeDate(isoDate)
		setValue('startWork', start)
	}

	const handleEndDateChange = (date: Date) => {
		const isoDate = date.toISOString()
		const end = normalizeDate(isoDate)
		setValue('endWork', end)
	}

	const handleCheckboxChange = () => {
		setIsStillWorking(!isStillWorking)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField<AddedCompanyFields>
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
			<TextField<AddedCompanyFields>
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
				label="Start of work in"
				margin="0 0 20px 0"
				initialDate={new Date()}
			/>
			{!isStillWorking && (
				<DatePicker
					onDateChange={handleEndDateChange}
					label="End of work in"
					margin="0 0 20px 0"
					initialDate={new Date()}
				/>
			)}
			<Checkbox
				name="isStillWorking"
				register={register}
				setValue={(name, value) => {
					setValue(name, value)
					handleCheckboxChange()
				}}
				watch={watch}
				rules={{ isChecked: isStillWorking }}
				errors={errors}
				label="Please indicate if you are currently working at this company."
				margin="0 0 20px 0"
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
			{isLoading && <Loader margin="25px 0 25px 0" />}
			<Button type="submit" height="45px" disabled={isLoading}>
				Added
			</Button>
		</form>
	)
}

export default AddedCompanyForm
