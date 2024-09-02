import { FC } from 'react'
import { MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import Avatar from '@/components/UI/Avatar'
import Button from '@/components/UI/Button'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import useResponsive from '@/hooks/useResponsive'
import { logout } from '@/store/auth/authSlice'
import { UserBarProps } from '@/types/props/menu/UserBarProps'
import { navigationPaths } from '@/utils/data/navigationPaths'

import { Email, Group, Name, Wrapper } from './UserBar.styled'

const UserBar: FC<UserBarProps> = ({ name, email, avatar, variant }) => {
	const { isLaptop } = useResponsive()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	return (
		<Wrapper onClick={() => navigate(navigationPaths.PROFILE)}>
			<Group>
				<Avatar
					imageUrl={avatar}
					width="85px"
					height="85px"
					border={true}
					margin="0 10px 0 0"
				/>
				<div>
					<Name variant={variant}>{name}</Name>
					<Email>{email}</Email>
				</div>
			</Group>
			{isLaptop ? (
				<Button width="30px" height="85px" onClick={() => dispatch(logout())}>
					<MdLogout size={22} />
				</Button>
			) : (
				<Button width="100%" height="35px" onClick={() => dispatch(logout())}>
					<MdLogout size={22} />
				</Button>
			)}
		</Wrapper>
	)
}

export default UserBar
