import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	padding: 10px;
	margin-bottom: 30px;

	border: 3px solid #e4e4e4;
	border-radius: 5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		padding: 25px;
	}
`

export const Group = styled.ul`
	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const Item = styled.li`
	margin-bottom: 15px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 33%;
		margin-bottom: 0;
	}
`
