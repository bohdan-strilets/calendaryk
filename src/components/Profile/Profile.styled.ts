import styled from '@emotion/styled'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

export const LeftSide = styled.div`
	width: 70%;
`

export const Section = styled.div`
	padding: 15px;
	margin-bottom: 30px;

	border: 1px solid #cccccc;
	border-radius: 5px;
	box-shadow: var(--box-shadow);

	:last-child {
		margin-bottom: 0;
	}
`

export const Id = styled.p`
	color: #cccccc;
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

export const Property = styled.p`
	font-weight: 700;
`

export const Value = styled.p`
	color: var(--gray-color);
`
