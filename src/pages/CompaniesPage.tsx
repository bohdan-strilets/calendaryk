import { AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'
import { TbLayoutGridAdd } from 'react-icons/tb'
import { toast } from 'react-toastify'

import ListCompanies from '@/components/ListCompanies'
import AddedCompanyForm from '@/components/ListCompanies/AddedCompanyForm'
import EditCompanyForm from '@/components/ListCompanies/EditCompanyForm'
import Statistics from '@/components/ListCompanies/Statistics'
import UploadLogoForm from '@/components/ListCompanies/UploadLogoForm'
import Modal from '@/components/Modal'
import Button from '@/components/UI/Button'
import Dialog from '@/components/UI/Dialog'
import Loader from '@/components/UI/Loader'
import { useAppSelector } from '@/hooks/useAppSelector'
import useModal from '@/hooks/useModal'
import useResponsive from '@/hooks/useResponsive'
import { getIsLoggedIn } from '@/store/auth/authSelectors'
import { useDeleteMutation, useGetAllQuery } from '@/store/companies/companyApi'

const CompaniesPage: FC = () => {
	const [currentCompanyId, setCurrentCompanyId] = useState<string | null>(null)

	const { checkQueryParam, modalNames, openModal, closeModal } = useModal()
	const isLoggedIn = useAppSelector(getIsLoggedIn)
	const { isMaxTablet } = useResponsive()
	const [deleteCompany, { isLoading: isDeleteLoading }] = useDeleteMutation()
	const { data, isLoading: isQueryLoading } = useGetAllQuery()
	const companies = data?.data

	const getCurrentId = (id: string) => setCurrentCompanyId(id)

	const handleDeleteCompany = async () => {
		if (currentCompanyId) {
			await deleteCompany(currentCompanyId)
			closeModal()
			toast.success('Company information successfully removed')
		}
	}

	return isQueryLoading ? (
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
				{checkQueryParam(modalNames.DELETE_COMPANY) && (
					<Modal title="Delete company">
						<Dialog
							successButtonLabel="Delete"
							successCallback={handleDeleteCompany}
							negativeCallback={closeModal}
							isLoading={isDeleteLoading}
							message="Deleting the company will result in the removal of all associated data. Please note that once this process is completed, it will not be possible to recover the information."
						/>
					</Modal>
				)}
				{checkQueryParam(modalNames.UPLOAD_COMPANY_LOGO) && (
					<Modal title="Update company logo">
						<UploadLogoForm companyId={currentCompanyId} />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default CompaniesPage
