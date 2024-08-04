import { FC } from 'react'

import { PriorityProps } from '@/types/props/PriorityProps'

import { Label, Wrapper } from './Priority.styled'

const Priority: FC<PriorityProps> = ({ priority }) => {
	return (
		<Wrapper priority={priority}>
			<Label>{priority}</Label>
		</Wrapper>
	)
}

export default Priority
