import { FC } from 'react'

import { useAppSelector } from '@/hooks/useAppSelector'
import { getUser } from '@/store/user/userSelectors'
import { parseDateTime } from '@/utils/functions/parseDateTime'

import Avatar from '../UI/Avatar'
import Title from '../UI/Title'
import {
	Id,
	Item,
	LeftSide,
	List,
	Property,
	RightSide,
	Section,
	Value,
	Wrapper,
} from './Profile.styled'

const Profile: FC = () => {
	const user = useAppSelector(getUser)
	const avatarUrl = user?.avatarUrls.at(-1)
	const name = `${user?.firstName} ${user?.lastName}`
	const dateBirth = user?.dateBirth?.toString()
	const parsedDateBirth = dateBirth ? parseDateTime(dateBirth).date : '-'

	return (
		user && (
			<Wrapper>
				<LeftSide>
					<Section>
						<Title textAlign="start" fontSize={44}>
							{name}
						</Title>
						<Id>ID: {user?._id}</Id>
						<List>
							<Item>
								<Property>Email:</Property>
								<Value>{user?.email}</Value>
							</Item>
							<Item>
								<Property>Password:</Property>
								<Value>**********</Value>
							</Item>
							<Item>
								<Property>Gender:</Property>
								<Value>{user?.gender}</Value>
							</Item>
							<Item>
								<Property>Date of birth:</Property>
								<Value>{parsedDateBirth}</Value>
							</Item>
						</List>
					</Section>

					<Section>
						<Title textAlign="start" fontSize={44}>
							Company
						</Title>
						<List>
							<Item>
								<Property>Name company:</Property>
								<Value>GPA Global ASG</Value>
							</Item>
							<Item>
								<Property>Profession:</Property>
								<Value>Cutting operator</Value>
							</Item>
							<Item>
								<Property>Start work:</Property>
								<Value>1995-06-02T19:06:01.205Z</Value>
							</Item>
							<Item>
								<Property>Salary:</Property>
								<Value>45</Value>
							</Item>
						</List>
					</Section>

					<Section>
						<Title textAlign="start" fontSize={44}>
							Vacation
						</Title>
						<List>
							<Item>
								<Property>Amount hours:</Property>
								<Value>160</Value>
							</Item>
							<Item>
								<Property>Hours left:</Property>
								<Value>130</Value>
							</Item>
							<Item>
								<Property>Hours used:</Property>
								<Value>30</Value>
							</Item>
							<Item>
								<Property>Planned vacation:</Property>
								<Value>26.08.2024 - 01.09.2024</Value>
							</Item>
						</List>
					</Section>
				</LeftSide>

				<RightSide>
					<Avatar imageUrl={avatarUrl ?? ''} width="100%" height="280px" />
				</RightSide>
			</Wrapper>
		)
	)
}

export default Profile
