export type AvatarProps = {
	imageUrl: string
	width?: string
	height?: string
	margin?: string
	border?: boolean
}

export type ImageProps = Pick<
	AvatarProps,
	'imageUrl' | 'width' | 'height' | 'margin' | 'border'
>
