import styled from '@emotion/styled'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

export const DateGroup = styled.div`
	margin-right: 35px;
`

export const Day = styled.p`
	font-size: 98px;
	font-family: var(--second-font);
	font-weight: 700;
	line-height: 1;

	color: var(--gray-color);
`

export const Month = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 32px;
	font-family: var(--second-font);
	line-height: 1;

	padding: 10px 0;

	background-color: var(--green-color);
	color: var(--white-color);
`

export const GreetingMessage = styled.p`
	font-size: 42px;
	font-weight: 700;
`

export const Name = styled.span`
	color: var(--green-color);
`

export const DateInfo = styled.p`
	font-size: 20px;
	font-weight: 700;
`
