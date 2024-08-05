import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	margin: 0 auto;
	padding: 0 15px;
	width: ${screenWidth.MOBILE};

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: ${screenWidth.TABLET};
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		width: ${screenWidth.LAPTOP};
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		width: ${screenWidth.DESKTOP};
	}
`
