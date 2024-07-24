import styled from '@emotion/styled'

import { screenWidth } from '@/utils/screenWidth'

export const Wrapper = styled.div`
	width: 320px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 400px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 370px;
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		width: 380px;
	}
`

export const Group = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		margin-bottom: 0;
	}
`

export const Name = styled.p`
	font-family: var(--second-font);
	font-size: 22px;
	color: var(--white-color);

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		font-size: 28px;
	}
`

export const Email = styled.p`
	font-weight: 600;
	text-transform: lowercase;
	font-size: 14px;

	padding: 0 6px;
	margin-bottom: 15px;

	background: var(--red-gradient);
	color: var(--white-color);
	border-radius: 5px;
	text-shadow: var(--text-shadow);

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		margin-bottom: 0;
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		padding: 0 12px;
		font-size: 16px;
	}
`
