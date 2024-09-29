import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { TbLayoutGridAdd } from 'react-icons/tb'

import ListCompanies from '@/components/ListCompanies'
import AddedCompanyForm from '@/components/ListCompanies/AddedCompanyForm'
import Statistics from '@/components/ListCompanies/Statistics'
import Modal from '@/components/Modal'
import Button from '@/components/UI/Button'
import useModal from '@/hooks/useModal'
import useResponsive from '@/hooks/useResponsive'

const CompaniesPage: FC = () => {
	const { checkQueryParam, modalNames, openModal } = useModal()
	const { isMaxTablet } = useResponsive()

	return (
		<>
			<Button
				type="button"
				onClick={() => openModal(modalNames.NEW_COMPANY)}
				height={isMaxTablet ? '80' : '140px'}
				variant="black"
				margin={isMaxTablet ? '0 0 20px 0' : '0 0 40px 0'}
			>
				<TbLayoutGridAdd size={isMaxTablet ? 55 : 80} />
			</Button>
			<ListCompanies />
			<Statistics />

			<AnimatePresence mode="wait">
				{checkQueryParam(modalNames.NEW_COMPANY) && (
					<Modal title="Added new company">
						<AddedCompanyForm />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default CompaniesPage
