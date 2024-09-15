import { unwrapResult } from '@reduxjs/toolkit'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import ButtonLink from '@/components/UI/ButtonLink'
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
import { SignInFormFields } from '@/types/inputs/SignInFormFields'
import { navigationPaths } from '@/utils/data/navigationPaths'
import { isApiError } from '@/utils/functions/isApiError'
import { validation } from '@/validation/LoginFormSchema'

const LoginForm: FC = () => {
	const { isMaxMobile, isMaxTablet, isMaxLaptop } = useResponsive()
	const { openModal, modalNames } = useModal()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const loading = useAppSelector(getLoading)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormFields>(validation)

	const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
		try {
			const result = await dispatch(operations.login(data))
			unwrapResult(result)
			navigate(navigationPaths.HOME)
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
				login
			</Title>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField<SignInFormFields>
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
					login
				</Button>
				<ButtonLink
					textAlign="center"
					onClick={() => openModal(modalNames.FORGOT_PASSWORD)}
				>
					Forgot your password?
				</ButtonLink>
			</form>
		</div>
	)
}

export default LoginForm
