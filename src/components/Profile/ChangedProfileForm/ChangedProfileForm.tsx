import { unwrapResult } from '@reduxjs/toolkit'
import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import Loader from '@/components/UI/Loader'
import TextField from '@/components/UI/TextField'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import useModal from '@/hooks/useModal'
import operations from '@/store/user/userOperations'
import { getLoading, getUser } from '@/store/user/userSelectors'
import { ChangedProfileFormInputs } from '@/types/inputs/ChangedProfileFormInputs'
import { genderOptions } from '@/utils/dropdownOptions/genderOptions'
import { isApiError } from '@/utils/functions/isApiError'
import { validation } from '@/validation/ChangedProfileFormSchema'

const ChangedProfileForm: FC = () => {
	const dispatch = useAppDispatch()
	const loading = useAppSelector(getLoading)
	const user = useAppSelector(getUser)
	const { closeModal } = useModal()
	const dateBirth = user?.dateBirth ? new Date(user?.dateBirth) : new Date()

	const {
		register,
		setValue,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<ChangedProfileFormInputs>(validation)

	useEffect(() => {
		const defaultValue = {
			firstName: user?.firstName,
			lastName: user?.lastName,
			dateBirth: user?.dateBirth,
			gender: user?.gender,
		}

		if (user) reset(defaultValue)
	}, [user, reset])

	const handleDateChange = (date: Date) => {
		setValue('dateBirth', date.toISOString())
	}

	const onSubmit: SubmitHandler<ChangedProfileFormInputs> = async (data) => {
		try {
			const normalizedDate = data.dateBirth
				? new Date(data.dateBirth)
				: new Date()

			const year = normalizedDate.getFullYear()
			const month = String(normalizedDate.getMonth() + 1).padStart(2, '0')
			const day = String(normalizedDate.getDate()).padStart(2, '0')

			const formattedDate = `${year}-${month}-${day}`

			const dto = {
				...data,
				dateBirth: formattedDate,
			}

			const result = await dispatch(operations.changeProfile(dto))
			unwrapResult(result)
			closeModal()
			toast.success('Profile changed successfully.')
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.message)
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField<ChangedProfileFormInputs>
				register={register}
				label="First name"
				name="firstName"
				type="text"
				height="50px"
				margin="0 0 20px 0"
				placeholder="User"
				errors={errors}
				rules={{ minLength: 2, maxLength: 70 }}
			/>
			<TextField<ChangedProfileFormInputs>
				register={register}
				label="Last name"
				name="lastName"
				type="text"
				height="50px"
				margin="0 0 20px 0"
				placeholder="Test"
				errors={errors}
				rules={{ minLength: 2, maxLength: 70 }}
			/>
			<DatePicker
				onDateChange={handleDateChange}
				placeholder="Select date"
				label="Date of birth"
				margin="0 0 20px 0"
				defaultValue={dateBirth}
			/>
			<DropdownList
				options={genderOptions}
				register={register}
				name="gender"
				setValue={setValue}
				watch={watch}
				placeholder="Gender"
				errors={errors}
				listHeight="230px"
				label="Select your gender"
				listPosition="top"
				margin="0 0 20px 0"
			/>
			{loading && <Loader margin="25px 0 25px 0" />}
			<Button type="submit" height="45px" disabled={loading}>
				Change
			</Button>
		</form>
	)
}

export default ChangedProfileForm
