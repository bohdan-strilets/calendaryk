import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	font-size: 40 px;
	text-transform: uppercase;

	margin-bottom: 10px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 44px;
		margin-bottom: 0;
	}
`

export const Image = styled.img`
	width: 280px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 240px;
	}
`

export const Info = styled(motion.div)`
	display: flex;
`

export const LocationDetails = styled.div`
	margin-left: 8px;
`

export const CountryLabel = styled.p`
	font-weight: 100;
	line-height: 1;

	color: var(--gray-color);
`

export const CityLabel = styled.p`
	font-weight: 700;
	line-height: 1;
`
