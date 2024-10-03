import { MotionProps } from 'framer-motion'

export interface CompanyInformationProps extends MotionProps {
	logoUrl: string
	companyName: string
	position: string
	startJob: string
	endJob: string
	salary: number
	onClick?: () => void
}
