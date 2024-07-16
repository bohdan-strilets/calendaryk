import { FC } from 'react'

import { LayoutProps } from '@/types/props/LayoutProps'

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<header></header>
			<main>{children}</main>
			<footer></footer>
		</>
	)
}

export default Layout
