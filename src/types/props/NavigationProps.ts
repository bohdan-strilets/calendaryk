export type NavigationProps = {
	onClose: () => void
	margin?: string
}

export type ListProps = Pick<NavigationProps, 'margin'>
