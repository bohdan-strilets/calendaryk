import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Avatar from '@/components/UI/Avatar'

import { navigationPaths } from '@/utils/data/navigationPaths'

import { UserBarProps } from '@/types/props/menu/UserBarProps'

import { Email, Group, Name, Wrapper } from './UserBar.styled'

const UserBar: FC<UserBarProps> = ({ name, email, avatar, variant }) => {
	const navigate = useNavigate()

	return (
		<Wrapper onClick={() => navigate(navigationPaths.PROFILE)}>
			<Group>
				<Avatar
					imageUrl={avatar}
					width="85px"
					height="85px"
					border={true}
					margin={variant !== 'short' ? '0 10px 0 0' : ''}
				/>
				{variant !== 'short' && (
					<div>
						<Name variant={variant}>{name}</Name>
						<Email>{email}</Email>
					</div>
				)}
			</Group>
		</Wrapper>
	)
}

export default UserBar
