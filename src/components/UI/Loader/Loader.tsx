import React from 'react'

import { LoaderProps } from '@/types/props/ui/LoaderProps'

import { Circle, Wrapper } from './Loader.styled'

const Loader: React.FC<LoaderProps> = ({ size, margin }) => {
	return (
		<Wrapper margin={margin}>
			<Circle size={size} />
			<Circle size={size} />
			<Circle size={size} />
		</Wrapper>
	)
}

export default Loader
