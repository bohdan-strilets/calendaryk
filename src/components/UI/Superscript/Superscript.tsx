import { FC } from 'react'

import { SuperscriptProps } from '@/types/props/ui/SuperscriptProps'

import { Wrapper } from './Superscript.styled'

const Superscript: FC<SuperscriptProps> = ({ children, position, color }) => {
	return (
		<Wrapper position={position} color={color}>
			{children}
		</Wrapper>
	)
}

export default Superscript
