import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import ButtonGoBack from '@/components/UI/ButtonGoBack'
import TextField from '@/components/UI/TextField'
import { ResendEmailFormInputs } from '@/types/inputs/ResendEmailFormInputs'
import { validation } from '@/validation/ResendEmailFormSchema'

import { TextWrapper } from './ResendEmailForm.styled'

const ResendEmailForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ResendEmailFormInputs>(validation)
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<ResendEmailFormInputs> = (data) => {
		console.log(data)
		toast.success('The letter has been sent successfully.', {})
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
				<TextField<ResendEmailFormInputs>
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
				<Button type="submit" height="45px" margin="0 0 40px 0">
					Resend Activation Email
				</Button>
			</form>
		</>
	)
}

export default ResendEmailForm
