import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

export const Item = styled(motion.li)`
	width: 100%;
	margin-bottom: 15px;

	border: 1px solid #cccccc;
	box-shadow: var(--box-shadow);
	border-radius: 5px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: stretch;
		justify-content: center;
		flex-direction: column;

		width: calc((100% - 4 * 15px) / 2);
		margin: 15px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		width: calc((100% - 6 * 15px) / 3);
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		width: calc((100% - 8 * 15px) / 4);
	}
`

export const CompanyDetails = styled.div`
	padding: 10px;
	border-top: 1px solid #cccccc;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		padding: 15px;
	}
`

export const CompanyName = styled.p`
	font-family: var(--second-font);
	font-size: 18px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 20px;
	}
`

export const Position = styled.p`
	margin-bottom: 15px;
	color: var(--gray-color);
`

export const EmploymentDates = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 15px;
`

export const SalaryDetails = styled.div`
	display: flex;
	align-items: center;
`

export const HourlyRate = styled.p`
	font-weight: 700;
	margin: 0 10px;
`

export const RateUnit = styled.span`
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;

	padding: 3px 6px 1px 6px;

	background-color: var(--gray-color);
	color: var(--white-color);
	border-radius: 5px;
`
