import { DatePickerProps } from '../props/ui/DatePickerProps'

export type DatePicker = Pick<
	DatePickerProps,
	'defaultValue' | 'onDateChange' | 'placeholder'
>
