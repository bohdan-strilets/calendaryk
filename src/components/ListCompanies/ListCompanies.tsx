import { FC } from 'react'

import useResponsive from '@/hooks/useResponsive'

import CompanyInformation from './CompanyInformation'
import Header from './Header'

const ListCompanies: FC = () => {
	const { isLaptop } = useResponsive()

	return (
		<>
			{isLaptop && <Header />}

			<CompanyInformation
				logoUrl="https://cdn.pixabay.com/photo/2020/06/09/12/04/pet-5278138_1280.jpg"
				companyName="GPA Global"
				position="Cutting operator"
				startJob="01.09.2021"
				endJob="20.05.2023"
				salary={45}
			/>
			<CompanyInformation
				logoUrl="https://cdn.pixabay.com/photo/2023/06/08/21/20/sun-8050441_1280.jpg"
				companyName="Tech Innovations Ltd"
				position="Software Development Engineer"
				startJob="01.09.2021"
				endJob="20.05.2023"
				salary={45}
			/>
			<CompanyInformation
				logoUrl="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png"
				companyName="Global Solutions Corporation"
				position="Senior Project Manager"
				startJob="01.09.2021"
				endJob="20.05.2023"
				salary={45}
			/>
			<CompanyInformation
				logoUrl="https://cdn.pixabay.com/photo/2023/06/08/21/30/anchor-8050448_1280.jpg"
				companyName="Global Tech Innovations and Advanced Solutions Limited"
				position="Senior Specialist in Software Engineering and Systems Architecture"
				startJob="01.09.2021"
				endJob="20.05.2023"
				salary={45}
			/>
		</>
	)
}

export default ListCompanies
