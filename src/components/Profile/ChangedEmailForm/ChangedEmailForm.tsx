import { unwrapResult } from '@reduxjs/toolkit'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import TextField from '@/components/UI/TextField'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import useModal from '@/hooks/useModal'
import operations from '@/store/user/userOperations'
import { getEmail, getLoading } from '@/store/user/userSelectors'
import { UpdateEmailFormFields } from '@/types/inputs/UpdateEmailFormFields'
import { isApiError } from '@/utils/functions/isApiError'
import { validation } from '@/validation/EmailChangeFormSchema'

const ChangedEmailForm: FC = () => {
	const dispatch = useAppDispatch()
	const { closeModal } = useModal()

	const userEmail = useAppSelector(getEmail)
	const loading = useAppSelector(getLoading)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdateEmailFormFields>(validation)

	const onSubmit: SubmitHandler<UpdateEmailFormFields> = async (data) => {
		if (data.email.toLowerCase() === userEmail?.toLowerCase()) {
			toast.success('You have entered the email that is currently in use.')
			return
		}
		try {
			const result = await dispatch(operations.changeEmail(data))
			unwrapResult(result)
			closeModal()
			toast.success('The email has been changed successfully.')
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.message)
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<p style={{ marginBottom: '20px' }}>
				Enter the new email address you want to use. After the changes are made,
				the system will automatically send an activation email to the new
				address.
			</p>
			<p style={{ marginBottom: '20px' }}>
				Make sure the email address you entered is correct, as an email with
				activation instructions will be sent to it. If you don’t receive the
				activation email within a few minutes, check your "Spam" or "Junk"
				folder in your inbox. Please note that the new email address will not be
				activated until you confirm it by clicking the link in the activation
				email. If you encounter any difficulties or have any questions, feel
				free to contact our support team.
			</p>
			<TextField<UpdateEmailFormFields>
				register={register}
				label="Enter the new email address"
				name="email"
				type="text"
				height="50px"
				margin="0 0 20px 0"
				placeholder="user.name@gmail.com"
				errors={errors}
				rules={{ required: true }}
				defaultValue={userEmail}
			/>
			{loading && <Loader margin="25px 0 25px 0" />}
			<Button type="submit" height="45px" disabled={loading}>
				Change
			</Button>
		</form>
	)
}

export default ChangedEmailForm
