import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	margin: 30px 0;
	padding: 5px;

	color: var(--white-color);
	background-color: var(--black-color);
	border-radius: 5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		padding: 0;
	}
`

export const DayWeather = styled.div`
	width: 100%;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-around;

		height: 270px;
	}
`

export const LeftSide = styled.div`
	height: 100%;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-around;

		width: 70%;
	}
`

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;

	font-size: 40px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		justify-content: center;
		font-size: 120px;
	}
`
