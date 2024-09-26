import { FC, useState } from 'react'

import useResponsive from '@/hooks/useResponsive'
import { parseDateTime } from '@/utils/functions/parseDateTime'

import Pagination from '../UI/Pagination'
import CompanyInformation from './CompanyInformation'
import { companies, Company } from './data'
import Header from './Header'

const ListCompanies: FC = () => {
	const { isLaptop } = useResponsive()

	const [currentPageData, setCurrentPageData] = useState<Company[]>([])

	const itemsPerPage = 10

	const handlePageChange = (pageData: Company[]) => {
		setCurrentPageData(pageData)
	}

	return (
		<>
			{isLaptop && <Header />}
			<ul>
				{currentPageData.map((company) => (
					<CompanyInformation
						key={company._id}
						companyName={company.name}
						position={company.profession}
						logoUrl={company.logoUrl}
						startJob={parseDateTime(company.startWork).date}
						endJob={parseDateTime(company.endWork).date}
						salary={company.salaryPerHour}
					/>
				))}
			</ul>
			{companies?.length > itemsPerPage && (
				<Pagination<Company>
					data={companies}
					itemsPerPage={itemsPerPage}
					onPageChange={handlePageChange}
				/>
			)}
		</>
	)
}

export default ListCompanies
