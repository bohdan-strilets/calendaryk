export type ControllersProps = {
	handlePrevMonth: () => void
	handleNextMonth: () => void
	handleOpenAdditionalOptions: () => void
	year: number
	monthName: string
	isOpen: boolean
}

export type ButtonProps = {
	width?: number
}

export type SettingIconProps = Pick<ControllersProps, 'isOpen'>
