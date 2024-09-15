import { unwrapResult } from '@reduxjs/toolkit'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import ButtonGoBack from '@/components/UI/ButtonGoBack'
import Loader from '@/components/UI/Loader'
import SmallTimer from '@/components/UI/SmallTimer'
import TextField from '@/components/UI/TextField'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import useTimer from '@/hooks/useTimer'
import operations from '@/store/user/userOperations'
import { getLoading } from '@/store/user/userSelectors'
import { VerificationEmailFields } from '@/types/inputs/VerificationEmailFields'
import { isApiError } from '@/utils/functions/isApiError'
import { validation } from '@/validation/ResendEmailDataSchema'

import { TextWrapper } from './ResendEmailForm.styled'

const ResendEmailForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<VerificationEmailFields>(validation)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const loading = useAppSelector(getLoading)
	const { showTimer, startTimer } = useTimer(60)

	const onSubmit: SubmitHandler<VerificationEmailFields> = async (data) => {
		try {
			const result = await dispatch(operations.requestRepeatActivation(data))
			unwrapResult(result)
			toast.success('The letter has been sent successfully.')
			startTimer()
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.message)
			}
		}
	}

	return (
		<>
			<ButtonGoBack
				label="registration information"
				margin="0 0 30px 0"
				onClick={() => navigate(-1)}
			/>
			<TextWrapper>
				<p style={{ marginBottom: '10px' }}>
					It looks like you haven’t activated your account yet. No worries—just
					enter your email address below, and we’ll send you a new activation
					link.
				</p>
				<p style={{ marginBottom: '10px' }}>
					Please check your spam or junk folder if you don’t see the email in
					your inbox.
				</p>
				<p>
					If you still don’t receive the email, please contact our support team
					for further assistance.
				</p>
			</TextWrapper>

			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField<VerificationEmailFields>
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
				{loading && <Loader margin="25px 0 25px 0" />}
				<Button type="submit" height="45px" disabled={loading || showTimer}>
					Resend Activation Email
				</Button>
				{showTimer && (
					<SmallTimer
						numberSeconds={60}
						message="Send again in"
						textAlign="center"
					/>
				)}
			</form>
		</>
	)
}

export default ResendEmailForm
