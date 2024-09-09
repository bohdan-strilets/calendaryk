import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import DatePicker from '@/components/UI/DatePicker'
import TextField from '@/components/UI/TextField'
import { ChangedProfileFormInputs } from '@/types/inputs/ChangedProfileFormInputs'
import { validation } from '@/validation/ChangedProfileFormSchema'

const ChangedProfileForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ChangedProfileFormInputs>(validation)

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
			<DatePicker label="Date of birth" placeholder="01.01.1990" />
		</form>
	)
}

export default ChangedProfileForm
