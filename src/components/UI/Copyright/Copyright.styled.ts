import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Text = styled.p`
	text-align: center;
	text-transform: lowercase;
	font-weight: 600;

	color: var(--white-color);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		margin-top: 10px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		margin-top: 0;
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		margin-top: 30px;
	}
`
