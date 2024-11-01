import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/ui/SuperscriptProps'

export const Wrapper = styled.span<WrapperProps>`
	position: relative;
	top: ${({ position }) => (position.top ? `${position.top}px` : 0)};
	right: ${({ position }) => (position.right ? `${position.right}px` : 0)};
	bottom: ${({ position }) => (position.bottom ? `${position.bottom}px` : 0)};
	left: ${({ position }) => (position.left ? `${position.left}px` : 0)};

	font-size: 12px;
	color: ${({ color }) => (color ? color : 'var(--green-color)')};
`
// t: -3, l: +1
