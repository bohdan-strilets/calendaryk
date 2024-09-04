export type SmallTimerProps = {
	numberSeconds: number
	message?: string
	textAlign?: 'start' | 'center' | 'end'
}

export type WrapperProps = Pick<SmallTimerProps, 'textAlign'>
