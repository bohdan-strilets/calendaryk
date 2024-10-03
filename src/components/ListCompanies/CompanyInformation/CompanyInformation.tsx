import { FC } from 'react'
import { BsCalendarRange } from 'react-icons/bs'
import { FaMoneyBillWave } from 'react-icons/fa6'

import Avatar from '@/components/UI/Avatar'
import { CompanyInformationProps } from '@/types/props/listCompanies/CompanyInformationProps'

import {
	CompanyDetails,
	CompanyName,
	EmploymentDates,
	HourlyRate,
	Item,
	Position,
	RateUnit,
	SalaryDetails,
} from './CompanyInformation.styled'

const CompanyInformation: FC<CompanyInformationProps> = ({
	logoUrl,
	companyName,
	position,
	startJob,
	endJob,
	salary,
	...motionProps
}) => {
	return (
		<Item {...motionProps}>
			<Avatar imageUrl={logoUrl} height="100px" backgroundSize="contain" />
			<CompanyDetails>
				<CompanyName>{companyName}</CompanyName>
				<Position>{position}</Position>
				<EmploymentDates>
					<p>{startJob}</p>
					<BsCalendarRange size={18} color="var(--green-color)" />
					<p>{endJob}</p>
				</EmploymentDates>
				<SalaryDetails>
					<FaMoneyBillWave size={18} color="var(--green-color)" />
					<HourlyRate>{salary}</HourlyRate>
					<RateUnit>PLN/H</RateUnit>
				</SalaryDetails>
			</CompanyDetails>
		</Item>
	)
}

export default CompanyInformation
