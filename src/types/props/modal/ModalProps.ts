import { ReactNode } from 'react'

export type ModalProps = {
	title: string
	children: string | ReactNode
	isFooter?: boolean
	positiveFooterLabel?: string
	negativeFooterLabel?: string
	positiveFooterEvent?: () => void
	negativeFooterEvent?: () => void
}
