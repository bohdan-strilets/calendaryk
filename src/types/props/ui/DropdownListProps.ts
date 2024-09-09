import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
} from 'react-hook-form'

import { DropdownOption } from '@/types/types/DropdownOption'

export type InputRules = {
	required?: boolean
	disabled?: boolean
}

export type DropdownListProps<T extends FieldValues> = {
	options: DropdownOption[]
	register: UseFormRegister<T>
	name: Path<T>
	setValue: UseFormSetValue<T>
	watch: UseFormWatch<T>
	placeholder: string
	rules?: InputRules
	errors?: FieldErrors<T>
	width?: string
	margin?: string
	listHeight?: string
	label?: string
	listPosition?: 'top' | 'bottom'
}

export type WrapperProps = Pick<
	DropdownListProps<FieldValues>,
	'margin' | 'width'
>

export type ArrowIconWrapperProps = {
	opened: boolean
}

export type ListProps = Pick<
	DropdownListProps<FieldValues>,
	'listHeight' | 'listPosition'
>
