import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 50px;
`

export const MonthName = styled.p`
	font-family: var(--second-font);
	font-weight: 700;
	font-size: 22px;
	line-height: 1;

	color: var(--gray-color);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 30px;
	}
`
