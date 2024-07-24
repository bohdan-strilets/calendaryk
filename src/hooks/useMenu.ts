import { useState } from 'react'

const useMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const onOpen = () => setIsOpen(true)
	const onClose = () => setIsOpen(false)

	const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) onClose()
	}

	return { isOpen, onOpen, onClose, onBackdropClick }
}

export default useMenu
