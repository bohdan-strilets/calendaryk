import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import TextField from '@/components/UI/TextField'
import { ForgotPasswordInputs } from '@/types/inputs/ForgotPasswordInputs'
import { validation } from '@/validation/ForgotPasswordSchema'

import { List, TextWrapper } from './ForgotPasswordForm.styled'

const ForgotPasswordForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgotPasswordInputs>(validation)

	const onSubmit: SubmitHandler<ForgotPasswordInputs> = (data) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
			<Button type="submit" height="45px" margin="0 0 40px 0">
				Send
			</Button>
		</form>
	)
}

export default ForgotPasswordForm
