import styled from '@emotion/styled'

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	background-color: rgba(0, 0, 0, 0.6);
	opacity: 0;

	transition: opacity var(--hover-effect);
`

export const List = styled.ul`
	width: 100%;
	height: 100%;
`

export const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 40px;

	border-bottom: 1px solid var(--gray-color);

	:last-child {
		border-bottom: none;
	}
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100%;

	background-color: transparent;
	color: var(--white-color);

	cursor: pointer;
	transition:
		background-color var(--hover-effect),
		color var(--hover-effect);

	:hover,
	:focus {
		background-color: rgba(255, 255, 255, 0.6);
		color: var(--black-color);
	}
`
export const Label = styled.p`
	margin-left: 15px;
`
