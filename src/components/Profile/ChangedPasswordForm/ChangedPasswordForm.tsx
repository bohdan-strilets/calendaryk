import { unwrapResult } from '@reduxjs/toolkit'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import PasswordField from '@/components/UI/PasswordField'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import useModal from '@/hooks/useModal'

import operations from '@/store/user/userOperations'
import { getLoading } from '@/store/user/userSelectors'

import { isApiError } from '@/utils/functions/isApiError'

import { PasswordUpdateFields } from '@/types/inputs/PasswordUpdateFields'

import { validation } from '@/validation/UpdatePasswordSchema'

const ChangedPasswordForm: FC = () => {
	const dispatch = useAppDispatch()
	const loading = useAppSelector(getLoading)
	const { closeModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PasswordUpdateFields>(validation)

	const onSubmit: SubmitHandler<PasswordUpdateFields> = async (data) => {
		try {
			const dto = {
				password: data.currentPassword,
				newPassword: data.newPasswordAgain,
			}

			const result = await dispatch(operations.changePassword(dto))
			unwrapResult(result)
			closeModal()
			toast.success('Password changed successfully.')
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.message)
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<PasswordField
				register={register}
				label="Enter your current password"
				name="currentPassword"
				height="50px"
				margin="0 0 20px 0"
				errors={errors}
				rules={{ required: true, minLength: 6, maxLength: 12 }}
			/>
			<PasswordField
				register={register}
				label="Create a new password"
				name="newPassword"
				height="50px"
				margin="0 0 20px 0"
				errors={errors}
				rules={{ required: true, minLength: 6, maxLength: 12 }}
			/>
			<PasswordField
				register={register}
				label="Repeat the entered password again"
				name="newPasswordAgain"
				height="50px"
				margin="0 0 20px 0"
				errors={errors}
				rules={{ required: true, minLength: 6, maxLength: 12 }}
			/>
			{loading && <Loader margin="25px 0 25px 0" />}
			<Button type="submit" height="45px" disabled={loading}>
				Change
			</Button>
		</form>
	)
}

export default ChangedPasswordForm
