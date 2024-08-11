export type TitleProps = {
	children: string
	fontSize: number
	textAlign: 'start' | 'center' | 'end'
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	variant?: 'gray' | 'black' | 'green' | 'red'
	margin?: string
}

export type StyledTagProps = Pick<
	TitleProps,
	'fontSize' | 'variant' | 'margin' | 'textAlign'
>
