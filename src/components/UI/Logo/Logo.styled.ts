import styled from '@emotion/styled'

import { screenWidth } from '@/utils/screenWidth'

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;

	outline: none;
	cursor: pointer;
	transition: transform var(--hover-effect);

	:hover,
	:focus {
		transform: scale(1.05);
	}
`

export const Image = styled.img`
	width: 150px;

	@media screen and (min-width: ${screenWidth.tablet}) {
		width: 220px;
	}

	@media screen and (min-width: ${screenWidth.laptop}) {
		width: 240px;
	}

	@media screen and (min-width: ${screenWidth.desktop}) {
		width: 330px;
	}
`
