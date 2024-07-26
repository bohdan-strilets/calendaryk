import { FC } from 'react'

import ContactForm from '@/components/Forms/ContactForm'
import Copyright from '@/components/UI/Copyright'
import Logo from '@/components/UI/Logo'
import StudioLogo from '@/components/UI/StudioLogo'

import Container from '../Container'
import { Content, CopyrightWrapper, Wrapper } from './Footer.styled'

const Footer: FC = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<Logo variant="light" />
					<CopyrightWrapper>
						<StudioLogo />
						<Copyright />
					</CopyrightWrapper>
					<ContactForm />
				</Content>
			</Container>
		</Wrapper>
	)
}

export default Footer
