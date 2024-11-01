import styled from '@emotion/styled'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
`

export const Label = styled.p`
	font-weight: 700;
	font-size: 32px;

	margin-left: 10px;
	color: ${({ color }) => color};
`
