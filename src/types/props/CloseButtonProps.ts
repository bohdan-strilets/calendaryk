export type CloseButtonProps = {
	close: () => void
	position?: boolean
	top?: string
	bottom?: string
	left?: string
	right?: string
}

export type ButtonProps = Pick<
	CloseButtonProps,
	'position' | 'top' | 'bottom' | 'left' | 'right'
>
