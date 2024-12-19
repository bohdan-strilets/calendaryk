import { FC } from 'react'

import Uploader from '@/components/Uploader'

import { useUploadLogoMutation } from '@/store/companies/companyApi'

import { UploadLogoProps } from '@/types/props/listCompanies/UploadLogoProps'
import { FileFormData } from '@/types/types/FileFormData'

import { CompanyLogoSchema } from '@/validation/CompanyLogoSchema'

const UploadLogoForm: FC<UploadLogoProps> = ({ companyId }) => {
	const [uploadLogo] = useUploadLogoMutation()

	const handleSubmitForm = async ({ file }: FileFormData) => {
		if (companyId) {
			await uploadLogo({ companyId, logo: file })
		}
	}

	return (
		<Uploader
			fileName="company-logo"
			fileTypes={CompanyLogoSchema.types}
			fileSize={CompanyLogoSchema.size}
			callback={handleSubmitForm}
		/>
	)
}

export default UploadLogoForm
