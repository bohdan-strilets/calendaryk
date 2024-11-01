import styled from '@emotion/styled'

import { IndicatorProps } from '@/types/props/ui/StatusIndicatorProps'

export const Indicator = styled.div<IndicatorProps>`
	width: ${({ size }) => (size ? `${size}px` : '20px')};
	height: ${({ size }) => (size ? `${size}px` : '20px')};

	background-color: ${({ isOn }) =>
		isOn ? ' var(--green-color)' : ' var(--gray-color)'};
	border-radius: 50%;
	box-shadow: var(--box-shadow);
`
