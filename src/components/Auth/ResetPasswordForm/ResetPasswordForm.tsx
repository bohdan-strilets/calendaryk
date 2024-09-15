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
import operations from '@/store/user/userOperations'
import { getLoading } from '@/store/user/userSelectors'
import { PasswordResetFields } from '@/types/inputs/PasswordResetFields'
import { navigationPaths } from '@/utils/data/navigationPaths'
import { isApiError } from '@/utils/functions/isApiError'
import { validation } from '@/validation/ResetPasswordSchema '

import { FormWrapper } from './ResetPasswordForm.styled'

const ResetPasswordForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PasswordResetFields>(validation)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const loading = useAppSelector(getLoading)

	const onSubmit: SubmitHandler<PasswordResetFields> = async (data) => {
		const dto = {
			email: data.email,
			password: data.passwordAgain,
		}

		try {
			const result = await dispatch(operations.resetPassword(dto))
			unwrapResult(result)
			toast.success('Password changed successfully.')
			navigate(`/${navigationPaths.AUTH}`)
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.message)
			}
		}
	}

	return (
		<>
			<Title type="h1" textAlign="center" margin="0 0 30px 0" fontSize={34}>
				Create new password
			</Title>
			<FormWrapper onSubmit={handleSubmit(onSubmit)}>
				<TextField<PasswordResetFields>
					register={register}
					label="Email"
					name="email"
					type="text"
					height="50px"
					margin="0 0 20px 0"
					placeholder="user.name@gmail.com"
					errors={errors}
					rules={{ required: true }}
				/>
				<PasswordField
					register={register}
					label="New password"
					name="password"
					height="50px"
					margin="0 0 20px 0"
					errors={errors}
					rules={{ required: true, minLength: 6, maxLength: 12 }}
				/>
				<PasswordField
					register={register}
					label="Password again"
					name="passwordAgain"
					height="50px"
					margin="0 0 20px 0"
					errors={errors}
					rules={{ required: true, minLength: 6, maxLength: 12 }}
				/>
				{loading && <Loader margin="25px 0 25px 0" />}
				<Button type="submit" height="45px" disabled={loading}>
					Reset password
				</Button>
			</FormWrapper>
		</>
	)
}

export default ResetPasswordForm
