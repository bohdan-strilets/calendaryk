import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	padding: 10px;

	margin-bottom: 30px;

	background: linear-gradient(
		to right,
		rgba(218, 226, 248, 0.3),
		rgba(214, 164, 164, 0.3)
	);
	border: 1px solid #ccc;
	border-radius: 10px;
	box-shadow: var(--box-shadow);

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 5px;
	}
`

export const CompanyInfoWrapper = styled.div`
	margin-bottom: 15px;

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		display: flex;
		align-items: center;

		margin-bottom: 0;
		width: 60%;
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		width: 45%;
	}
`

export const TitleWrapper = styled.div`
	margin-top: 15px;

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		margin-left: 15px;
		margin-top: 0;
	}
`

export const CompanyName = styled.p`
	font-weight: 700;
	font-family: var(--second-font);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 20px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		font-size: 22px;
	}
`

export const JobPosition = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 0 10px;
	max-width: 100%;

	background-color: #cccccc;
	border-radius: 3px;
`

export const DetailsWrapper = styled.div`
	display: flex;
	align-items: center;

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		width: 18%;
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		width: 25%;
	}
`

export const Label = styled.p`
	margin-left: 10px;
`
