import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	margin-bottom: 20px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		margin-bottom: 0;
	}
`

export const GreetingsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const DateGroup = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;

	margin-bottom: 10px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		align-items: center;
		justify-content: center;

		margin-right: 35px;
		margin-bottom: 0;
	}
`

export const Day = styled.p`
	font-size: 44px;
	font-family: var(--second-font);
	font-weight: 700;
	line-height: 1;

	color: var(--gray-color);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 98px;
	}
`

export const Month = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 20px;
	font-family: var(--second-font);
	line-height: 1;

	padding: 4px 10px;

	background-color: var(--green-color);
	color: var(--white-color);
	border-radius: 3px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 32px;
		padding: 8px 25px;
	}
`

export const GreetingMessage = styled.p`
	font-size: 26px;
	font-weight: 700;

	margin-bottom: 10px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 42px;
		margin-bottom: 0;
	}
`

export const Name = styled.span`
	color: var(--green-color);
`

export const DateInfo = styled.p`
	font-size: 16px;
	font-weight: 700;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 20px;
	}
`

export const Accent = styled.span`
	color: var(--red-color);
`
