import { useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const useModal = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const POPUP_NAME = 'modal'

	const modalNames = {
		FORGOT_PASSWORD: 'forgot-password',
		WELCOME: 'welcome',
		RESEND_EMAIL: 'resend-email',
		CHANGED_PROFILE: 'changed-profile',
		CHANGED_EMAIL: 'changed-email',
		CHANGED_PASSWORD: 'changed-password',
	}

	const openModal = useCallback(
		(modalName: string) => {
			const updatedParams = new URLSearchParams(searchParams)
			updatedParams.set(POPUP_NAME, modalName)
			setSearchParams(updatedParams)
		},
		[searchParams, setSearchParams]
	)

	const closeModal = useCallback(() => {
		const updatedParams = new URLSearchParams(searchParams)
		updatedParams.delete(POPUP_NAME)
		setSearchParams(updatedParams)
	}, [searchParams, setSearchParams])

	const checkQueryParam = (modalName: string) => {
		const modal = searchParams.get(POPUP_NAME)
		return modal === modalName
	}

	const backdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) closeModal()
	}

	useEffect(() => {
		const onPressEscape = (e: KeyboardEvent) => {
			if (e.code === 'Escape') closeModal()
		}

		document.addEventListener('keydown', onPressEscape)
		return () => document.removeEventListener('keydown', onPressEscape)
	}, [])

	return {
		modalNames,
		openModal,
		closeModal,
		checkQueryParam,
		backdropClick,
	}
}

export default useModal
