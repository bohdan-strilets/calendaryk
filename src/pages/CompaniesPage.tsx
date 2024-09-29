import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { TbLayoutGridAdd } from 'react-icons/tb'

import ListCompanies from '@/components/ListCompanies'
import AddedCompanyForm from '@/components/ListCompanies/AddedCompanyForm'
import Statistics from '@/components/ListCompanies/Statistics'
import Modal from '@/components/Modal'
import Button from '@/components/UI/Button'
import useModal from '@/hooks/useModal'

const CompaniesPage: FC = () => {
	const { checkQueryParam, modalNames, openModal } = useModal()

	return (
		<>
			<Button
				type="button"
				onClick={() => openModal(modalNames.NEW_COMPANY)}
				height="140px"
				variant="black"
				margin="0 0 40px 0"
			>
				<TbLayoutGridAdd size={80} />
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
