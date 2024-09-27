import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 15px;
`

export const Item = styled.li`
	padding: 0 5px;
	width: 33%;

	border-bottom: 1px solid #ccc;

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		width: 18%;

		:first-of-type {
			width: 60%;
		}
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		width: 25%;

		:first-of-type {
			width: 45%;
		}
	}
`

export const Label = styled.p`
	font-weight: 700;
`
