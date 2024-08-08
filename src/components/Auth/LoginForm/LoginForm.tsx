import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import ButtonLink from '@/components/UI/ButtonLink'
import TextField from '@/components/UI/TextField'
import useResponsive from '@/hooks/useResponsive'
import { LoginFormInputs } from '@/types/inputs/LoginFormInputs'
import { validation } from '@/validation/LoginFormSchema'

import { FormTitle } from './LoginForm.styled'

const LoginForm: FC = () => {
	const { isMaxMobile, isMaxTablet, isMaxLaptop } = useResponsive()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>(validation)

	const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
		console.log(data)
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
			<FormTitle>login</FormTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField<LoginFormInputs>
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
				<TextField<LoginFormInputs>
					register={register}
					label="Password"
					name="password"
					type="password"
					width={getFieldWidth()}
					height="50px"
					margin="0 0 20px 0"
					errors={errors}
					rules={{ required: true, minLength: 6, maxLength: 12 }}
				/>
				<Button type="submit" height="45px" margin="0 0 40px 0">
					login
				</Button>
				<ButtonLink>Forgot your password?</ButtonLink>
			</form>
		</div>
	)
}

export default LoginForm
