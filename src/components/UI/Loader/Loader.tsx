import React from 'react'

import { Circle, Wrapper } from './Loader.styled'

const Loader: React.FC = () => {
	return (
		<Wrapper>
			<Circle />
			<Circle />
			<Circle />
		</Wrapper>
	)
}

export default Loader
