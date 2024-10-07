import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
	position: absolute;
	top: 50px;
	left: 0;
	z-index: 99;

	display: flex;
	justify-content: space-between;
	padding: 15px;

	overflow-y: auto;

	max-height: 250px;
	width: 100%;

	background-color: var(--white-color);
	box-shadow: var(--box-shadow);
`

export const List = styled.ul`
	width: 48%;
`

export const Item = styled(motion.li)`
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #cccccc;

	:last-child {
		border-bottom: none;
	}
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: transparent;

	width: 100%;
	height: 100%;
	padding: 0 10px;

	cursor: pointer;
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: #cccccc;
	}
`
