import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/CalendarSegmentProps'

export const Wrapper = styled.div<WrapperProps>`
	margin: ${({ margin }) => (margin ? margin : '')};
`
