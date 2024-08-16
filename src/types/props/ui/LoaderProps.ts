export type LoaderProps = {
	size?: number
	margin?: string
}

export type WrapperProps = Pick<LoaderProps, 'margin'>

export type CircleProps = Pick<LoaderProps, 'size'>
