import styled from '@emotion/styled'

export const List = styled.ul`
	display: flex;
	align-items: end;
	flex-direction: column;

	width: 100%;
	height: 100%;
`

export const Item = styled.li`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: end;

	width: 25px;
	height: 25px;
	padding: 4px;
	margin-bottom: 10px;

	box-shadow: var(--box-shadow);
	border-radius: 5px;
	overflow: hidden;

	&:hover {
		width: 60px;
	}

	&:hover p {
		transform: translateX(0);
		opacity: 1;
	}

	:last-child {
		margin-bottom: 0;
	}
`

export const Label = styled.p`
	position: absolute;
	left: 8px;
	white-space: nowrap;

	font-weight: 700;
	transition:
		transform var(--hover-effect),
		opacity var(--hover-effect);

	transform: translateX(100%);
	opacity: 0;
`
