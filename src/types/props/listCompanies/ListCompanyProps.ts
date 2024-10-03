import { Company } from '@/types/types/Company'

export type ListCompanyProps = {
	companies?: Company[] | null
	getCurrentId: (id: string) => void
}
