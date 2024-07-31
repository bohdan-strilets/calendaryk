import styled from '@emotion/styled'

export const Wrapper = styled.div`
	margin: 30px 0;

	color: var(--white-color);
	background-color: var(--black-color);
	border-radius: 5px;
`

export const DayWeather = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 270px;
`

export const LeftSide = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;

	width: 70%;
	height: 100%;
`

export const TemperatureLabel = styled.p`
	font-size: 20px;
	margin-left: 5px;
`
