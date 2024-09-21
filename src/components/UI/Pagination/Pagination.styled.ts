import styled from '@emotion/styled'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	padding: 15px;
	margin-top: 15px;
`

export const ArrowButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 30px;
	height: 30px;

	background-color: var(--red-color);
	color: var(--white-color);
	border: none;
	outline: none;

	cursor: pointer;
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--black-color);
	}
`

export const Button = styled.button`
	position: relative;

	width: 30px;
	height: 30px;

	font-weight: 700;
	background-color: transparent;
	border: none;
	outline: none;

	cursor: pointer;

	::after {
		content: '';

		position: absolute;
		bottom: -2px;
		left: 0;

		display: block;

		width: 100%;
		height: 2px;

		background-color: red;
		opacity: 0;

		transition: opacity var(--hover-effect);
	}

	:hover,
	:focus {
		::after {
			opacity: 1;
		}
	}
`
