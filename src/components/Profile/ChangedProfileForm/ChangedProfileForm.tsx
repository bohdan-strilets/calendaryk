import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import TextField from '@/components/UI/TextField'
import { ChangedProfileFormInputs } from '@/types/inputs/ChangedProfileFormInputs'
import { genderOptions } from '@/utils/dropdownOptions/genderOptions'
import { validation } from '@/validation/ChangedProfileFormSchema'

const ChangedProfileForm: FC = () => {
	const {
		register,
		setValue,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<ChangedProfileFormInputs>(validation)

	const handleDateChange = (date: Date) => {
		setValue('dateBirth', date)
	}

	const onSubmit: SubmitHandler<ChangedProfileFormInputs> = async (data) =>
		console.log(data)

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
				label="Date of birth"
				onDateChange={handleDateChange}
				margin="0 0 20px 0"
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
			<Button type="submit" height="45px">
				Change
			</Button>
		</form>
	)
}

export default ChangedProfileForm
