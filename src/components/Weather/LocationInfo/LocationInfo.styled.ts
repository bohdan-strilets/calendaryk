import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
	font-size: 44px;
	text-transform: uppercase;
`

export const Image = styled.img`
	width: 240px;
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
