import { FC } from 'react'

import ContactForm from '@/components/Forms/ContactForm'
import Copyright from '@/components/UI/Copyright'
import Logo from '@/components/UI/Logo'
import StudioLogo from '@/components/UI/StudioLogo'

import Container from '../Container'
import {
	Content,
	CopyrightWrapper,
	Group,
	LogoWrapper,
	Wrapper,
} from './Footer.styled'

const Footer: FC = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<Group>
						<LogoWrapper>
							<Logo variant="light" />
						</LogoWrapper>
						<CopyrightWrapper>
							<StudioLogo />
							<Copyright />
						</CopyrightWrapper>
					</Group>
					<ContactForm />
				</Content>
			</Container>
		</Wrapper>
	)
}

export default Footer
