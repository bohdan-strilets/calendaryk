import styled from '@emotion/styled'

import {
	ButtonProps,
	SettingIconProps,
} from '@/types/props/ui/datePicker/ControllersProps'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 15px;
`

export const Button = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: ${({ width }) => (width ? `${width}px` : '85px')};
	height: 25px;

	border-radius: 3px;
	background-color: #ccc;
	color: var(--white-color);

	cursor: pointer;
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--gray-color);
	}
`

export const Label = styled.p`
	font-weight: 700;
	margin-right: 15px;
`

export const DateInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`

export const SettingIconWrapper = styled.div<SettingIconProps>`
	transition: transform var(--hover-effect);
	transform: ${({ isOpen }) => (isOpen ? 'rotate(120deg)' : '')};
`
