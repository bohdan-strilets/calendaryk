import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	padding: 5px;
	background: linear-gradient(to right, #11998e, #38ef7d);
	border-radius: 5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0;
	}
`

export const Image = styled.img`
	width: 280px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 600px;
	}
`

export const DataWrapper = styled.div`
	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`

export const Text = styled.p`
	text-align: center;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		text-align: left;
	}
`

export const AccentText = styled.span`
	font-weight: 700;
	color: var(--white-color);
`

export const TimerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-top: 20px;
`

export const TimerCell = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		margin-right: 20px;
	}
`

export const TimerValue = styled.p`
	font-family: var(--second-font);
	font-size: 34px;
	font-weight: 700;

	padding: 18px;

	border-radius: 8px;
	background-color: var(--black-color);
	color: #38ef7d;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 88px;
		padding: 15px;
	}
`

export const TimerLabel = styled.p`
	font-size: 10px;
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 16px;
	}
`
