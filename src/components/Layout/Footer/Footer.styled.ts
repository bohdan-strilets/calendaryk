import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.footer`
	background-color: var(--black-color);
	color: var(--white-color);
	padding: 15px 0;
`

export const Content = styled.div`
	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const Group = styled.div`
	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		display: flex;
		align-items: center;
		justify-content: space-around;

		width: 100%;
	}
`

export const LogoWrapper = styled.div`
	@media screen and (max-width: ${screenWidth.PRE_TABLET}) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`

export const CopyrightWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 20px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		flex-direction: column;
		justify-content: center;
		margin-bottom: 0;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		flex-direction: row;
		justify-content: space-evenly;
		width: 100%;
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		flex-direction: column;
		justify-content: center;
	}
`
