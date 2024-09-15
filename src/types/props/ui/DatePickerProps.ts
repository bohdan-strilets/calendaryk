export type DatePickerProps = {
	onDateChange: (date: Date) => void
	placeholder: string
	defaultValue: Date
	label?: string
	margin?: string
}

export type WrapperProps = Pick<DatePickerProps, 'margin'>
