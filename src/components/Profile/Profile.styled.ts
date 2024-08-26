import styled from '@emotion/styled'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

export const LeftSide = styled.div`
	width: 70%;
`

export const RightSide = styled.div`
	width: 25%;
`

export const List = styled.ul``

export const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 15px;

	border-bottom: 2px dotted #000;

	:last-child {
		border: none;
	}
`
