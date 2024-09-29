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
	disabled?: boolean
}

export type NumberFieldProps<T extends FieldValues> = {
	register: UseFormRegister<T>
	name: Path<T>
	rules?: InputRules
	label?: string
	placeholder?: string
	errors?: FieldErrors<T>
	width?: string
	height?: string
	margin?: string
	padding?: string
	defaultValue?: string
}

export type WrapperProps = Pick<NumberFieldProps<FieldValues>, 'margin'>

export type InputProps = Pick<
	NumberFieldProps<FieldValues>,
	'width' | 'height' | 'padding'
>
