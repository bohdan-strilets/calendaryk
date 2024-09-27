import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

import useResponsive from '@/hooks/useResponsive'
import { parseDateTime } from '@/utils/functions/parseDateTime'

import Pagination from '../UI/Pagination'
import CompanyInformation from './CompanyInformation'
import { companies, Company } from './data'
import Header from './Header'
import Statistics from './Statistics'

const ListCompanies: FC = () => {
	const [currentPageData, setCurrentPageData] = useState<Company[]>([])

	const { isLaptop } = useResponsive()
	const itemsPerPage = 10

	const handlePageChange = (pageData: Company[]) => {
		setCurrentPageData(pageData)
	}

	useEffect(() => {
		if (companies.length > 0) {
			const initialPageData = companies.slice(0, itemsPerPage)
			handlePageChange(initialPageData)
		}
	}, [companies])

	return (
		<>
			{isLaptop && <Header />}
			<ul>
				{currentPageData.map((company, index) => (
					<motion.li
						key={company._id}
						initial={{ y: '-100%', opacity: 0 }}
						animate={{ y: '0%', opacity: 1 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
					>
						<CompanyInformation
							companyName={company.name}
							position={company.profession}
							logoUrl={company.logoUrl}
							startJob={parseDateTime(company.startWork).date}
							endJob={parseDateTime(company.endWork).date}
							salary={company.salaryPerHour}
						/>
					</motion.li>
				))}
			</ul>
			{companies?.length > itemsPerPage && (
				<Pagination<Company>
					data={companies}
					itemsPerPage={itemsPerPage}
					onPageChange={handlePageChange}
				/>
			)}
			<Statistics />
		</>
	)
}

export default ListCompanies
