import { unwrapResult } from '@reduxjs/toolkit'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import SmallTimer from '@/components/UI/SmallTimer'
import TextField from '@/components/UI/TextField'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import useTimer from '@/hooks/useTimer'
import operations from '@/store/user/userOperations'
import { getLoading } from '@/store/user/userSelectors'
import { ForgotPasswordInputs } from '@/types/inputs/ForgotPasswordInputs'
import { isApiError } from '@/utils/functions/isApiError'
import { validation } from '@/validation/ForgotPasswordSchema'

import { List, TextWrapper } from './ForgotPasswordForm.styled'

const ForgotPasswordForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgotPasswordInputs>(validation)

	const dispatch = useAppDispatch()
	const loading = useAppSelector(getLoading)
	const { showTimer, startTimer } = useTimer(60)

	const onSubmit: SubmitHandler<ForgotPasswordInputs> = async (data) => {
		try {
			const result = await dispatch(operations.requestResetPassword(data))
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
			<TextWrapper>
				<p>To reset your password, please follow these steps:</p>
				<List>
					<li>
						<p>
							Enter the email address you used when registering on our site.
							This is necessary for us to identify your account.
						</p>
					</li>
					<li>
						<p>
							After you enter your email address, we will send you an email with
							further instructions on how to reset your password.
						</p>
					</li>
					<li>
						<p>
							Check your email and follow the link provided in the message to
							create a new password.
						</p>
					</li>
				</List>
				<p>
					If you encounter any difficulties, please don't hesitate to contact
					our support team.
				</p>
			</TextWrapper>

			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField<ForgotPasswordInputs>
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
					Send
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

export default ForgotPasswordForm
