import { FC } from 'react'
import { GrClose } from 'react-icons/gr'

import { CloseButtonProps } from '@/types/props/CloseButtonProps'

import { Button } from './CloseButton.styled'

const CloseButton: FC<CloseButtonProps> = ({
	close,
	position,
	top,
	bottom,
	left,
	right,
}) => {
	return (
		<Button
			onClick={close}
			position={position}
			top={top}
			bottom={bottom}
			left={left}
			right={right}
		>
			<GrClose />
		</Button>
	)
}

export default CloseButton
