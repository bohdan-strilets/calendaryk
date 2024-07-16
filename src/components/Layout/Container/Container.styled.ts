import styled from '@emotion/styled'

import { screenWidth } from '@/utils/screenWidth'

export const Wrapper = styled.div`
	margin: 0 auto;
	padding: 0 15px;
	width: ${screenWidth.mobile};

	@media screen and (min-width: ${screenWidth.tablet}) {
		width: ${screenWidth.tablet};
	}

	@media screen and (min-width: ${screenWidth.laptop}) {
		width: ${screenWidth.laptop};
	}

	@media screen and (min-width: ${screenWidth.desktop}) {
		width: ${screenWidth.desktop};
	}
`
