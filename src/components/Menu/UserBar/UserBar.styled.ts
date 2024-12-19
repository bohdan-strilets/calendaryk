import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

import { NameProps } from '@/types/props/menu/UserBarProps'

export const Wrapper = styled.div`
	cursor: pointer;
`

export const Group = styled.div`
	display: flex;
	align-items: center;
`

export const Name = styled.p<NameProps>`
	font-family: var(--second-font);
	font-size: 22px;
	color: ${({ variant }) =>
		variant === 'light' ? 'var(--white-color)' : 'var(--black-color)'};

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		font-size: 28px;
	}
`

export const Email = styled.p`
	font-weight: 600;
	text-transform: lowercase;
	font-size: 14px;

	padding: 0 6px;

	background: var(--red-gradient);
	color: var(--white-color);
	border-radius: 5px;
	text-shadow: var(--text-shadow);

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		padding: 0 12px;
		font-size: 16px;
	}
`
