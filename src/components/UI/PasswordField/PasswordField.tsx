import { useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

import { PasswordFieldProps } from '@/types/props/ui/PasswordFieldProps'

import TextField from '../TextField'
import { Button, Wrapper } from './PasswordField.styled'

const PasswordField = <T extends FieldValues>({
	label,
	register,
	name,
	rules,
	placeholder,
	errors,
	width,
	height,
	margin,
}: PasswordFieldProps<T>) => {
	const [type, setType] = useState<'text' | 'password'>('password')

	const changeType = () => {
		if (type === 'password') {
			setType('text')
		} else {
			setType('password')
		}
	}

	return (
		<Wrapper>
			<TextField<T>
				register={register}
				name={name}
				label={label}
				type={type}
				width={width}
				height={height}
				margin={margin}
				placeholder={placeholder}
				errors={errors}
				rules={rules}
				padding="0 40px 0 10px"
			/>
			<Button type="button" onClick={changeType} label={label}>
				{type === 'password' ? <BsEyeFill /> : <BsEyeSlashFill />}
			</Button>
		</Wrapper>
	)
}

export default PasswordField
