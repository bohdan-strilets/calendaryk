import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { screenWidth } from '@/utils/data/screenWidth'

import {
	AccentLetterProps,
	FirstTextProps,
	StyledLinkProps,
} from '@/types/props/ui/LogoProps'

export const StyledLink = styled(Link)<StyledLinkProps>`
	position: relative;
	display: inline-flex;
	flex-direction: column;

	:hover .second-text,
	:focus .second-text {
		color: ${({ variant }) =>
			variant === 'light' ? 'var(--black-color)' : 'var(--white-color)'};
	}

	:active {
		transform: scale(0.99);
	}
`

export const FirstText = styled.p<FirstTextProps>`
	position: relative;
	right: -10px;
	z-index: 1;

	font-family: var(--decorative-font);
	font-size: 22px;

	color: ${({ variant }) =>
		variant === 'dark' ? 'var(--gray-color)' : 'var(--black-color)'};

	@media screen and (min-width: ${screenWidth.TABLET}) {
		right: -20px;
		font-size: 28px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		right: -35px;
		font-size: 32px;
	}
`

export const AccentLetter = styled(motion.span)<AccentLetterProps>`
	display: inline-block;
	color: ${({ variant }) =>
		variant === 'dark' ? 'var(--gray-color)' : 'var(--black-color)'};
`

export const SecondText = styled.p`
	position: relative;
	z-index: 1;

	font-family: var(--second-font);
	font-size: 32px;
	font-weight: 700;
	line-height: 1;

	color: var(--red-color);
	text-shadow: var(--text-shadow);

	transition: color var(--hover-effect);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 40px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		font-size: 52px;
	}
`

// Calendar icon in logo

export const Icon = styled.div`
	position: absolute;
	top: 5px;
	right: -5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		top: 8px;
		right: -8px;
	}
`

export const Header = styled.div`
	position: relative;

	width: 50px;
	height: 10px;

	background: var(--red-gradient);
	border-top-right-radius: 2px;
	border-top-left-radius: 2px;
	box-shadow: var(--box-shadow);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 55px;
		height: 15px;

		border-top-right-radius: 4px;
		border-top-left-radius: 4px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		width: 65px;
		height: 15px;
	}
`

export const Line = styled.div<{ left: string; bg: string }>`
	position: absolute;
	top: -3px;
	left: ${({ left }) => `${left}`};

	width: 4px;
	height: 13px;

	background: var(--black-color);
	border-radius: 5px;
	background: ${({ bg }) => `${bg}`};

	@media screen and (min-width: ${screenWidth.TABLET}) {
		height: 15px;
	}
`

export const Body = styled.div`
	width: 50px;
	height: 30px;

	background: hsla(0, 0%, 100%, 1);

	background: linear-gradient(90deg, #f6fdff 49%, #fffafa 50%, #d2e7fe 51%);

	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	box-shadow: var(--box-shadow);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 55px;
		height: 35px;

		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		width: 65px;
		height: 40px;
	}
`
