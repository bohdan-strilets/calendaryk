import {
	FieldErrors,
	FieldValues,
	Path,
	PathValue,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
} from 'react-hook-form'

export type InputRules<T> = {
	isChecked?: PathValue<T, Path<T>>
	required?: boolean
	disabled?: boolean
	readOnly?: boolean
}

export type CheckboxProps<T extends FieldValues> = {
	register: UseFormRegister<T>
	setValue: UseFormSetValue<T>
	watch: UseFormWatch<T>
	name: Path<T>
	label?: string
	rules?: InputRules<T>
	errors?: FieldErrors<T>
	margin?: string
}

export type CustomCheckboxProps = Pick<
	InputRules<FieldValues>,
	'isChecked' | 'disabled'
> &
	Pick<CheckboxProps<FieldValues>, 'label'>

export type WrapperProps = Pick<CheckboxProps<FieldValues>, 'margin'>
