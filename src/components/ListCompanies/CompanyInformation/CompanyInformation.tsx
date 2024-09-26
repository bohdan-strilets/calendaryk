import { FC } from 'react'
import { BsCalendarRange } from 'react-icons/bs'
import { TbCoins } from 'react-icons/tb'

import Avatar from '@/components/UI/Avatar'
import { CompanyInformationProps } from '@/types/props/listCompanies/CompanyInformationProps'

import {
	CompanyInfoWrapper,
	CompanyName,
	DetailsWrapper,
	JobPosition,
	Label,
	TitleWrapper,
	Wrapper,
} from './CompanyInformation.styled'

const CompanyInformation: FC<CompanyInformationProps> = ({
	logoUrl,
	companyName,
	position,
	startJob,
	endJob,
	salary,
}) => {
	return (
		<Wrapper>
			<CompanyInfoWrapper>
				<Avatar
					width="90px"
					height="90px"
					border
					imageUrl={logoUrl}
					backgroundSize="contain"
				/>
				<TitleWrapper>
					<CompanyName>{companyName}</CompanyName>
					<JobPosition>{position}</JobPosition>
				</TitleWrapper>
			</CompanyInfoWrapper>
			<DetailsWrapper>
				<BsCalendarRange size={18} />
				<Label>
					{startJob} - {endJob}
				</Label>
			</DetailsWrapper>
			<DetailsWrapper>
				<TbCoins size={20} />
				<Label>{salary} PLN</Label>
			</DetailsWrapper>
		</Wrapper>
	)
}

export default CompanyInformation
