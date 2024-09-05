import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

const floatAndSwing = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(-5deg);
  }
  50% {
    transform: translateY(-20px) rotate(0deg);
  }
  75% {
    transform: translateY(-10px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`

export const Text = styled.p`
	font-size: 20px;
	text-align: center;

	margin-bottom: 30px;
`

export const Image = styled.img`
	width: 300px;
	height: 300px;
	margin: 0 auto;
	animation: ${floatAndSwing} 3s ease-in-out infinite;
`

export const List = styled.ul`
	margin-top: 30px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
`
