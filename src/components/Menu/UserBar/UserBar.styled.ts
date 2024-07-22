import styled from '@emotion/styled'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Name = styled.p`
	font-family: var(--second-font);
	font-size: 28px;
	color: var(--white-color);
`

export const Email = styled.p`
	font-weight: 600;
	text-transform: lowercase;

	padding: 0 12px;

	background: var(--red-gradient);
	color: var(--white-color);
	border-radius: 5px;
	text-shadow: var(--text-shadow);
`
