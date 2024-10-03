import { AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'
import { TbLayoutGridAdd } from 'react-icons/tb'

import ListCompanies from '@/components/ListCompanies'
import AddedCompanyForm from '@/components/ListCompanies/AddedCompanyForm'
import EditCompanyForm from '@/components/ListCompanies/EditCompanyForm'
import Statistics from '@/components/ListCompanies/Statistics'
import Modal from '@/components/Modal'
import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import { useAppSelector } from '@/hooks/useAppSelector'
import useModal from '@/hooks/useModal'
import useResponsive from '@/hooks/useResponsive'
import { getIsLoggedIn } from '@/store/auth/authSelectors'
import { useGetAllQuery } from '@/store/companies/companyApi'

const CompaniesPage: FC = () => {
	const [currentCompanyId, setCurrentCompanyId] = useState<string | null>(null)

	const { checkQueryParam, modalNames, openModal } = useModal()
	const isLoggedIn = useAppSelector(getIsLoggedIn)
	const { isMaxTablet } = useResponsive()
	const { data, isLoading } = useGetAllQuery()
	const companies = data?.data

	const getCurrentId = (id: string) => setCurrentCompanyId(id)

	return isLoading ? (
		<Loader />
	) : (
		<>
			{isLoggedIn && (
				<Button
					type="button"
					onClick={() => openModal(modalNames.NEW_COMPANY)}
					height={isMaxTablet ? '80' : '140px'}
					variant="black"
					margin={isMaxTablet ? '0 0 20px 0' : '0 0 40px 0'}
				>
					<TbLayoutGridAdd size={isMaxTablet ? 55 : 80} />
				</Button>
			)}
			<ListCompanies companies={companies} getCurrentId={getCurrentId} />
			<Statistics companies={companies} />

			<AnimatePresence mode="wait">
				{checkQueryParam(modalNames.NEW_COMPANY) && (
					<Modal title="Added new company">
						<AddedCompanyForm />
					</Modal>
				)}
				{checkQueryParam(modalNames.EDIT_COMPANY) && (
					<Modal title="Update company information">
						<EditCompanyForm companyId={currentCompanyId} />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default CompaniesPage
