import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	font-family: var(--second-font);
	font-size: 18px;

	height: 45px;

	background-color: var(--gray-color);
	color: var(--white-color);
	border-radius: 3px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 20px;
	}
`
