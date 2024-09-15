import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import TextField from '@/components/UI/TextField'
import useResponsive from '@/hooks/useResponsive'
import { ContactFields } from '@/types/inputs/ContactFields'
import { validation } from '@/validation/ContactFormSchema'

import { Wrapper } from './ContactForm.styled'

const ContactForm: FC = () => {
	const { isMaxTablet } = useResponsive()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFields>(validation)

	const onSubmit: SubmitHandler<ContactFields> = (data) => {
		console.log(data)
	}

	return (
		<Wrapper onSubmit={handleSubmit(onSubmit)}>
			<TextField<ContactFields>
				register={register}
				name="name"
				type="text"
				width={isMaxTablet ? '290px' : '320px'}
				height="40px"
				margin="0 0 15px 0"
				placeholder="User name"
				errors={errors}
				rules={{ required: true, minLength: 2, maxLength: 100 }}
			/>
			<TextField<ContactFields>
				register={register}
				name="email"
				type="email"
				width={isMaxTablet ? '290px' : '320px'}
				height="40px"
				margin="0 0 15px 0"
				placeholder="user.name@gmail.com"
				errors={errors}
				rules={{ required: true, minLength: 2, maxLength: 100 }}
			/>

			<Button type="submit">Send</Button>
		</Wrapper>
	)
}

export default ContactForm
