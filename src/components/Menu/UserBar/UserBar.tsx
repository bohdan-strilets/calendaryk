import { FC } from 'react'
import { MdLogout } from 'react-icons/md'

import Avatar from '@/components/UI/Avatar'
import Button from '@/components/UI/Button'
import useResponsive from '@/hooks/useResponsive'
import { UserBarProps } from '@/types/props/UserBarProps'

import { Email, Group, Name, Wrapper } from './UserBar.styled'

const UserBar: FC<UserBarProps> = ({ name, email, avatar }) => {
	const { isLaptop } = useResponsive()

	return (
		<Wrapper>
			<Group>
				<Avatar
					imageUrl={avatar}
					width="85px"
					height="85px"
					border={true}
					margin="0 10px 0 0"
				/>
				<div>
					<Name>{name}</Name>
					<Email>{email}</Email>
				</div>
			</Group>
			{isLaptop ? (
				<Button width="30px" height="85px">
					<MdLogout size={22} />
				</Button>
			) : (
				<Button width="100%" height="35px">
					<MdLogout size={22} />
				</Button>
			)}
		</Wrapper>
	)
}

export default UserBar
