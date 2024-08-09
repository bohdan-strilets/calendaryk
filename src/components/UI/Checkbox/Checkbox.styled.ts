import styled from '@emotion/styled'

import {
	CustomCheckboxProps,
	WrapperProps,
} from '@/types/props/ui/CheckboxProps'
import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div<WrapperProps>`
	margin: ${({ margin }) => (margin ? margin : '')};
`

export const Input = styled.input`
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	clip: rect(0 0 0 0);
	overflow: hidden;

	:focus + .checkbox {
		outline: 3px solid rgba(219, 19, 19, 0.3);
	}
`

export const Group = styled.div`
	display: flex;
	align-items: start;
	cursor: pointer;
`

export const CustomCheckbox = styled.p<CustomCheckboxProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	min-width: 20px;
	height: 20px;
	margin-right: 10px;

	color: var(--white-color);
	background-color: ${({ isChecked }) => (isChecked ? 'var(--red-color)' : '')};
	border: 2px solid var(--red-color);
	border-radius: 3px;

	opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

	@media screen and (min-width: ${screenWidth.TABLET}) {
		min-width: 22px;
		height: 22px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		min-width: 24px;
		height: 24px;
	}
`

export const Error = styled.p`
	font-weight: 600;
	margin-top: 5px;
	color: var(--red-color);
`
