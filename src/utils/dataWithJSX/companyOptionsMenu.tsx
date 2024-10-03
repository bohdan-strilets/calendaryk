import { BiSolidCloudUpload } from 'react-icons/bi'
import { MdDelete, MdModeEdit } from 'react-icons/md'

import { DropdownMenuElements } from '@/types/types/DropdownMenuElements'

export type params = {
	editCompany: () => void
	deleteCompany: () => void
	uploadLogo: () => void
}

export const companyOptionsMenu = ({
	editCompany,
	deleteCompany,
	uploadLogo,
}: params): DropdownMenuElements[] => {
	return [
		{
			id: 0,
			label: 'Edit information',
			icon: <MdModeEdit />,
			callback: editCompany,
		},
		{
			id: 1,
			label: 'Delete company',
			icon: <MdDelete />,
			callback: deleteCompany,
		},
		{
			id: 2,
			label: 'Update logo',
			icon: <BiSolidCloudUpload />,
			callback: uploadLogo,
		},
	]
}
