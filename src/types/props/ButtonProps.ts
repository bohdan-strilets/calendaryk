import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonProps = {
	children: React.ReactNode | string
	width?: string
	height?: string
	margin?: string
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

export type WrapperProps = Pick<ButtonProps, 'width' | 'height' | 'margin'>
