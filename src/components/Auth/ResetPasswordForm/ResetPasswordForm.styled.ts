import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const FormWrapper = styled.form`
	margin: 0 auto;
	width: 280px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 600px;
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		width: 750px;
	}
`
