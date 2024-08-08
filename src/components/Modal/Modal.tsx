import { FC } from 'react'
import { createPortal } from 'react-dom'

import useModal from '@/hooks/useModal'
import useResponsive from '@/hooks/useResponsive'
import { ModalProps } from '@/types/props/modal/ModalProps'

import Button from '../UI/Button'
import CloseButton from '../UI/CloseButton'
import {
	Backdrop,
	Content,
	Footer,
	Header,
	Title,
	Wrapper,
} from './Modal.styled'

const modalPortal = document.getElementById('menu') as HTMLDivElement

const Modal: FC<ModalProps> = ({
	title,
	children,
	isFooter,
	positiveFooterLabel,
	negativeFooterLabel,
	positiveFooterEvent,
	negativeFooterEvent,
}) => {
	const { isMaxMobile } = useResponsive()
	const { closeModal, backdropClick } = useModal()

	return createPortal(
		<Backdrop
			key="backdrop"
			onClick={backdropClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Wrapper
				key="modal"
				initial={{ y: '0%', x: '-50%' }}
				animate={{ y: ['-50%', '-53%', '-50%'] }}
				exit={{ y: '0%', x: '-50%' }}
				transition={{ duration: 0.3 }}
			>
				<Header>
					<Title>{title}</Title>
					<CloseButton
						close={closeModal}
						position={true}
						right={isMaxMobile ? '10px' : '30px'}
						top={isMaxMobile ? '15px' : '35px'}
					/>
				</Header>
				<Content>{children}</Content>
				{isFooter && (
					<Footer>
						<Button
							type="button"
							onClick={negativeFooterEvent}
							width={isMaxMobile ? '100px' : '150px'}
							height={isMaxMobile ? '35px' : '40px'}
							margin="0 30px 0 0"
							variant="green"
						>
							{negativeFooterLabel}
						</Button>
						<Button
							type="button"
							onClick={positiveFooterEvent}
							width={isMaxMobile ? '100px' : '150px'}
							height={isMaxMobile ? '35px' : '40px'}
							variant="black"
						>
							{positiveFooterLabel}
						</Button>
					</Footer>
				)}
			</Wrapper>
		</Backdrop>,
		modalPortal
	)
}

export default Modal
