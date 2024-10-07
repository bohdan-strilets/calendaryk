import styled from '@emotion/styled'

export const Label = styled.p`
	font-weight: 600;
`

export const Input = styled.div`
	width: 100%;

	background-color: var(--white-color);
	border-radius: 3px;
	box-shadow: var(--box-shadow);

	cursor: pointer;

	:hover .calendar-icon,
	:focus .calendar-icon {
		color: var(--green-color);
	}
`

export const InputDisplay = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	min-height: 50px;
	padding: 0 10px;
`
