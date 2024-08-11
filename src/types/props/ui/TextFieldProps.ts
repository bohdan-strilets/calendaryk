import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
} from 'react-hook-form'

export type InputRules = {
	required?: boolean
	min?: number
	max?: number
	minLength?: number
	maxLength?: number
	disabled?: boolean
}

export type TextFieldProps<T extends FieldValues> = {
	register: UseFormRegister<T>
	name: Path<T>
	type: 'text' | 'password' | 'email'
	rules?: InputRules
	label?: string
	placeholder?: string
	errors?: FieldErrors<T>
	width?: string
	height?: string
	margin?: string
	padding?: string
}

export type WrapperProps = Pick<TextFieldProps<FieldValues>, 'margin'>

export type InputProps = Pick<
	TextFieldProps<FieldValues>,
	'width' | 'height' | 'padding'
>
