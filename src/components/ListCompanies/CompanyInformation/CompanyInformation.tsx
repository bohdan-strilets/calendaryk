import { FC } from 'react'
import { BsCalendarRange } from 'react-icons/bs'
import { FaMoneyBillWave } from 'react-icons/fa6'

import Avatar from '@/components/UI/Avatar'
import DropdownMenu from '@/components/UI/DropdownMenu'

import useModal from '@/hooks/useModal'

import { companyOptionsMenu } from '@/utils/dataWithJSX/companyOptionsMenu'
import { compareDates } from '@/utils/functions/compareDates'
import { parseDateTime } from '@/utils/functions/parseDateTime'

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
	const { openModal, modalNames } = useModal()

	const handlerOpenEditForm = () => openModal(modalNames.EDIT_COMPANY)
	const handleOpedDeleteForm = () => openModal(modalNames.DELETE_COMPANY)
	const handleOpenUploadForm = () => openModal(modalNames.UPLOAD_COMPANY_LOGO)

	const isStillWorking = compareDates(endJob, new Date().toISOString())

	return (
		<Item {...motionProps}>
			<DropdownMenu
				menuItems={companyOptionsMenu({
					editCompany: handlerOpenEditForm,
					deleteCompany: handleOpedDeleteForm,
					uploadLogo: handleOpenUploadForm,
				})}
			/>
			<Avatar imageUrl={logoUrl} height="100px" backgroundSize="contain" />
			<CompanyDetails>
				<CompanyName>{companyName}</CompanyName>
				<Position>{position}</Position>
				<EmploymentDates>
					<p>{parseDateTime(startJob).date}</p>
					<BsCalendarRange size={18} color="var(--green-color)" />
					<p>{isStillWorking ? '---' : parseDateTime(endJob).date}</p>
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
