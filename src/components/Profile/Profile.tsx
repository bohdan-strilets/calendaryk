import { FC } from 'react'

import { useAppSelector } from '@/hooks/useAppSelector'
import { getUser } from '@/store/user/userSelectors'

import Avatar from '../UI/Avatar'
import Title from '../UI/Title'
import { Item, LeftSide, List, RightSide, Wrapper } from './Profile.styled'

const Profile: FC = () => {
	const user = useAppSelector(getUser)
	const avatarUrl = user?.avatarUrls.at(-1)
	const name = `${user?.firstName} ${user?.lastName}`

	return (
		<Wrapper>
			<LeftSide>
				<Title textAlign="start" fontSize={44}>
					{`${name} (${user?.nickname})`}
				</Title>
				<p>{user?._id}</p>
				<p>{user?.description}</p>
				<List>
					<Item>
						<p>Email:</p>
						<p>{user?.email}</p>
					</Item>
					<Item>
						<p>Phone number:</p>
						<p>{user?.phoneNumber}</p>
					</Item>
					<Item>
						<p>Password:</p>
						<p>******</p>
					</Item>
					<Item>
						<p>Gender:</p>
						<p>{user?.gender}</p>
					</Item>
					<Item>
						<p>Date of birth:</p>
						<p>{user?.dateBirth ? user?.dateBirth.toString() : ''}</p>
					</Item>
				</List>

				<Title textAlign="start" fontSize={44}>
					Company
				</Title>
				<List>
					<Item>
						<p>Name company:</p>
						<p>GPA Global ASG</p>
					</Item>
					<Item>
						<p>Profession:</p>
						<p>Cutting operator</p>
					</Item>
					<Item>
						<p>Start work:</p>
						<p>1995-06-02T19:06:01.205Z</p>
					</Item>
					<Item>
						<p>Salary:</p>
						<p>45</p>
					</Item>
				</List>

				<Title textAlign="start" fontSize={44}>
					Vacation
				</Title>
				<List>
					<Item>
						<p>Amount hours:</p>
						<p>160</p>
					</Item>
					<Item>
						<p>Hours left:</p>
						<p>130</p>
					</Item>
					<Item>
						<p>Hours used:</p>
						<p>30</p>
					</Item>
					<Item>
						<p>Planned vacation:</p>
						<p>26.08.2024 - 01.09.2024</p>
					</Item>
				</List>
			</LeftSide>
			<RightSide>
				<Avatar imageUrl={avatarUrl ?? ''} width="240px" height="240px" />
			</RightSide>
		</Wrapper>
	)
}

export default Profile
