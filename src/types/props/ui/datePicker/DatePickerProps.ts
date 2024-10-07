export type DatePickerProps = {
	onDateChange: (date: Date) => void
	initialDate: Date
	label?: string
	margin?: string
}

export type WrapperProps = Pick<DatePickerProps, 'margin'>
