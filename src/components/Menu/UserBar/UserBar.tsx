import { FC } from 'react'
import { MdLogout } from 'react-icons/md'

import Avatar from '@/components/UI/Avatar'
import Button from '@/components/UI/Button'
import { UserBarProps } from '@/types/props/UserBarProps'

import { Email, Name, Wrapper } from './UserBar.styled'

const UserBar: FC<UserBarProps> = ({ name, email, avatar }) => {
	return (
		<Wrapper>
			<Avatar imageUrl={avatar} width="85px" height="85px" border={true} />
			<div>
				<Name>{name}</Name>
				<Email>{email}</Email>
			</div>
			<Button width="30px" height="85px">
				<MdLogout size={22} />
			</Button>
		</Wrapper>
	)
}

export default UserBar
