export type ButtonLinkProps = {
	children: string
	onClick?: () => void
	textAlign?: 'start' | 'center' | 'end'
	width?: string
	height?: string
	margin?: string
	variant?: 'green' | 'red' | 'gray'
}

export type ButtonProps = Pick<
	ButtonLinkProps,
	'textAlign' | 'width' | 'height' | 'margin' | 'variant'
>
