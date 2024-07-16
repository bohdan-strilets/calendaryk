import { FC } from 'react'

import ContactForm from '@/components/Forms/ContactForm'

import Container from '../Container'
import { Content, Logo, Wrapper } from './Footer.styled'

const Footer: FC = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<Logo>SCHEDULE</Logo>
					<ul>
						<li>Home</li>
						<li>Calendar</li>
						<li>Todo list</li>
						<li>Profile</li>
						<li>Statistics</li>
						<li>Users</li>
						<li>About us</li>
					</ul>
					<ContactForm />
				</Content>
			</Container>
		</Wrapper>
	)
}

export default Footer
