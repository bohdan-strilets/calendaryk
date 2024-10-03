import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
	position: relative;
	z-index: 999;
`

export const DropdownToggle = styled.button`
	position: absolute;
	top: 5px;
	right: 5px;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 30px;
	height: 30px;

	background-color: transparent;
	border-radius: 3px;

	cursor: pointer;
	transition:
		background-color var(--hover-effect),
		color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--green-color);
		color: var(--white-color);
	}
`

export const List = styled(motion.ul)`
	position: absolute;
	top: 40px;
	right: 5px;

	box-shadow: var(--box-shadow);
`

export const Item = styled(motion.li)`
	width: 100%;
	height: 100%;

	border-bottom: 1px solid #bbbbbb;

	:last-child {
		border-bottom: none;
	}
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: end;

	width: 100%;
	height: 40px;
	padding: 0 15px;

	background-color: #dddddd;
	color: var(--black-color);

	cursor: pointer;

	:hover,
	:focus {
		background-color: var(--green-color);
		color: var(--white-color);
	}

	:active {
		transform: scale(0.99);
	}
`

export const ButtonLabel = styled.p`
	margin-right: 10px;
`
