import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Item = styled.li`
	width: 48%;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 100px;

		:last-child {
			margin-left: 15px;
		}
	}
`
