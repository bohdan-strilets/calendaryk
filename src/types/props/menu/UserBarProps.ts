export type UserBarProps = {
	name: string
	email: string
	avatar: string
	variant: 'light' | 'dark' | 'short'
}

export type NameProps = Pick<UserBarProps, 'variant'>
