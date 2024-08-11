import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
} from 'react-hook-form'

import { InputRules } from './TextFieldProps'

export type PasswordFieldProps<T extends FieldValues> = {
	register: UseFormRegister<T>
	name: Path<T>
	label?: string
	rules?: InputRules
	placeholder?: string
	errors?: FieldErrors<T>
	width?: string
	height?: string
	margin?: string
}

export type ButtonProps = Pick<PasswordFieldProps<FieldValues>, 'label'>
