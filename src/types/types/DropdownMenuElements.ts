import { ReactNode } from 'react'

export type DropdownMenuElements = {
	id: number
	label: string
	icon: ReactNode
	callback: () => void
}
