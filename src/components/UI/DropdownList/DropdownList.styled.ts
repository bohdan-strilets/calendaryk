import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { MdOutlineCheck } from 'react-icons/md'

import {
	ArrowIconWrapperProps,
	ListProps,
	WrapperProps,
} from '@/types/props/ui/DropdownListProps'

export const Wrapper = styled.div<WrapperProps>`
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: start;

	width: ${({ width }) => (width ? width : '100%')};
	margin: ${({ margin }) => (margin ? margin : '')};
`

export const MainLabel = styled.p`
	font-weight: 600;
	margin-bottom: 6px;
`

export const Required = styled.span`
	color: var(--red-color);
	font-size: 20px;
`

export const Input = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	min-height: 50px;
	padding: 10px;

	background-color: var(--white-color);
	border-bottom: 3px solid transparent;
	border-radius: 3px;
	box-shadow: var(--box-shadow);
`

export const ArrowIconWrapper = styled.div<ArrowIconWrapperProps>`
	width: 22px;
	height: 22px;

	color: var(--gray-color);

	transition: transform 150ms linear;
	transform: rotate(${({ opened }) => (opened ? '180deg' : '0')});
`

export const List = styled(motion.ul)<ListProps>`
	position: absolute;
	top: ${({ listPosition }) => (listPosition === 'bottom' ? '115%' : '')};
	bottom: ${({ listPosition }) => (listPosition === 'top' ? '85%' : '')};
	left: 0;
	z-index: 99;

	border-radius: 3px;
	box-shadow: var(--box-shadow);
	background-color: var(--white-color);

	width: 100%;
	max-height: ${({ listHeight }) => (listHeight ? listHeight : '300px')};

	overflow-y: auto;
`

export const Item = styled(motion.li)`
	width: 100%;
	height: 45px;
	border-radius: 3px;

	border-bottom: 1px solid #ccc;

	:last-child {
		border-bottom: none;
	}
`

export const ItemLabel = styled.p`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 100%;
	padding: 10px;

	background-color: var(--white-color);

	cursor: pointer;

	:hover,
	:focus {
		background-color: #ccc;
	}

	:active {
		transform: scale(0.99);
	}
`

export const CheckIcon = styled(MdOutlineCheck)`
	color: var(--green-color);
`

export const Error = styled.p`
	font-weight: 600;
	margin-top: 5px;
	color: var(--red-color);
`
