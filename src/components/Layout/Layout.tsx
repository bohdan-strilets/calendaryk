import { FC } from 'react'

import { LayoutProps } from '@/types/props/layout/LayoutProps'

import Container from './Container'
import Footer from './Footer'
import Header from './Header'

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</>
	)
}

export default Layout
