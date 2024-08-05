import styled from '@emotion/styled'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	background: linear-gradient(to right, #11998e, #38ef7d);
	border-radius: 5px;
`

export const Image = styled.img`
	width: 600px;
`

export const DataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const AccentText = styled.span`
	font-weight: 700;
	color: var(--white-color);
`

export const TimerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	margin-top: 20px;
`

export const TimerCell = styled.div`
	margin-right: 20px;
`

export const TimerValue = styled.p`
	font-family: var(--second-font);
	font-size: 88px;
	font-weight: 700;

	padding: 15px;

	border-radius: 8px;
	background-color: var(--black-color);
	color: #38ef7d;
`

export const TimerLabel = styled.p`
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
`
