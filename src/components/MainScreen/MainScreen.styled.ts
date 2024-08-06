import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Group = styled.div`
	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`
