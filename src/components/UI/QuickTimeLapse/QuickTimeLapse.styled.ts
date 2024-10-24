import styled from '@emotion/styled'

import { ListProps } from '@/types/props/ui/QuickTimeLapseProps'

export const List = styled.ul<ListProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: ${({ margin }) => (margin ? margin : '')};
`

export const Item = styled.li`
	width: 90px;
	height: 30px;
`

export const Button = styled.button`
	width: 100%;
	height: 100%;

	background-color: var(--green-color);
	color: var(--white-color);

	cursor: pointer;
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--gray-color);
	}
`

export const Label = styled.p``
