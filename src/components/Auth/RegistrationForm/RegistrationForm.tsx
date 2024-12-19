import { unwrapResult } from '@reduxjs/toolkit'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import PasswordField from '@/components/UI/PasswordField'
import TextField from '@/components/UI/TextField'
import Title from '@/components/UI/Title'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import useModal from '@/hooks/useModal'
import useResponsive from '@/hooks/useResponsive'

import operations from '@/store/auth/authOperations'
import { getLoading } from '@/store/auth/authSelectors'

import { navigationPaths } from '@/utils/data/navigationPaths'
import { isApiError } from '@/utils/functions/isApiError'

import { UserRegistrationFields } from '@/types/inputs/UserRegistrationFields'

import { validation } from '@/validation/RegistrationFormSchema'

const RegistrationForm: FC = () => {
	const { isMaxMobile, isMaxTablet, isMaxLaptop } = useResponsive()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const loading = useAppSelector(getLoading)
	const { openModal, modalNames } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserRegistrationFields>(validation)

	const onSubmit: SubmitHandler<UserRegistrationFields> = async (data) => {
		try {
			const result = await dispatch(operations.registration(data))
			unwrapResult(result)

			toast.success('Registration was successful')
			navigate(navigationPaths.HOME)
			openModal(modalNames.WELCOME)
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.message)
			}
		}
	}

	const getFieldWidth = () => {
		if (isMaxMobile) {
			return '290px'
		}
		if (!isMaxMobile && isMaxTablet) {
			return '550px'
		}
		if (!isMaxMobile && !isMaxTablet && isMaxLaptop) {
			return '430px'
		}
		return '550px'
	}

	return (
		<div>
			<Title fontSize={40} textAlign="center" type="h1" variant="gray">
				registration
			</Title>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField<UserRegistrationFields>
					register={register}
					label="First name"
					name="firstName"
					type="text"
					width={getFieldWidth()}
					height="50px"
					margin="0 0 20px 0"
					placeholder="User"
					errors={errors}
					rules={{ required: true, minLength: 2, maxLength: 70 }}
				/>
				<TextField<UserRegistrationFields>
					register={register}
					label="Last name"
					name="lastName"
					type="text"
					width={getFieldWidth()}
					height="50px"
					margin="0 0 20px 0"
					placeholder="Test"
					errors={errors}
					rules={{ required: true, minLength: 2, maxLength: 70 }}
				/>
				<TextField<UserRegistrationFields>
					register={register}
					label="Email"
					name="email"
					type="text"
					width={getFieldWidth()}
					height="50px"
					margin="0 0 20px 0"
					placeholder="user.name@gmail.com"
					errors={errors}
					rules={{ required: true }}
				/>
				<PasswordField
					register={register}
					label="Password"
					name="password"
					width={getFieldWidth()}
					height="50px"
					margin="0 0 20px 0"
					errors={errors}
					rules={{ required: true, minLength: 6, maxLength: 12 }}
				/>
				{loading && <Loader margin="25px 0 25px 0" />}
				<Button
					type="submit"
					height="45px"
					margin="0 0 40px 0"
					disabled={loading}
				>
					registration
				</Button>
			</form>
		</div>
	)
}

export default RegistrationForm
