import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const DayStatusContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 30px;
`

export const DayStatusGroup = styled.div`
	display: flex;
	align-items: center;

	font-weight: 700;
	font-size: 22px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 28px;
	}
`

export const DayStatusLabel = styled.p`
	margin-left: 10px;
	text-transform: uppercase;
`

export const NumberHours = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;

	font-weight: 700;
	text-transform: uppercase;

	width: 40px;
	height: 30px;

	background-color: var(--green-color);
	color: var(--white-color);
	box-shadow: var(--box-shadow);
	border-radius: 5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 18px;
		width: 50px;
		height: 35px;
	}
`

export const DateInformation = styled.div`
	margin-bottom: 10px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const DateGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		justify-content: center;
	}
`

export const DateLabel = styled.p`
	margin-left: 10px;
`

export const AdditionalHoursContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 30px;
`
