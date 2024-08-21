export type UserBarProps = {
	name: string
	email: string
	avatar: string
	variant: 'light' | 'dark'
}

export type NameProps = Pick<UserBarProps, 'variant'>
