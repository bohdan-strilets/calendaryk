import { FC, useEffect, useState } from 'react'

import useResponsive from '@/hooks/useResponsive'
import { ListCompanyProps } from '@/types/props/listCompanies/ListCompanyProps'
import { Company } from '@/types/types/Company'
import { parseDateTime } from '@/utils/functions/parseDateTime'

import Pagination from '../UI/Pagination'
import CompanyInformation from './CompanyInformation'
import { List } from './ListCompanies.styled'

const ListCompanies: FC<ListCompanyProps> = ({ companies }) => {
	const [currentPageData, setCurrentPageData] = useState<Company[]>([])

	const { isDesktop } = useResponsive()
	const itemsPerPage = isDesktop ? 8 : 6

	const handlePageChange = (pageData: Company[]) => {
		setCurrentPageData(pageData)
	}

	useEffect(() => {
		if (companies && companies.length > 0) {
			const initialPageData = companies.slice(0, itemsPerPage)
			handlePageChange(initialPageData)
		}
	}, [companies, itemsPerPage, isDesktop])

	return (
		companies && (
			<>
				<List>
					{currentPageData.map((company, index) => (
						<CompanyInformation
							key={company._id}
							initial={{ y: '-100%', opacity: 0 }}
							animate={{ y: '0%', opacity: 1 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							companyName={company.name}
							position={company.profession}
							logoUrl={company.logoUrl}
							startJob={parseDateTime(company.startWork).date}
							endJob={parseDateTime(company.endWork).date}
							salary={company.salaryPerHour}
						/>
					))}
				</List>
				{companies?.length > itemsPerPage && (
					<Pagination<Company>
						data={companies}
						itemsPerPage={itemsPerPage}
						onPageChange={handlePageChange}
					/>
				)}
			</>
		)
	)
}

export default ListCompanies
