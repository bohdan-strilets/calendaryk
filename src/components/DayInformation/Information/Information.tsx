import { motion } from 'framer-motion'
import { FC } from 'react'
import { FaCalendarDays, FaClock, FaGears } from 'react-icons/fa6'
import { MdWork } from 'react-icons/md'

import StatusIndicator from '@/components/UI/StatusIndicator'
import { InformationProps } from '@/types/props/dayInformation/InformationProps'

import {
	AdditionalHoursContainer,
	DateGroup,
	DateInformation,
	DateLabel,
	DayStatusContainer,
	DayStatusGroup,
	DayStatusLabel,
	NumberHours,
} from './Information.styled'

const Information: FC<InformationProps> = ({
	dayStatus,
	numberHours,
	date,
	timeRange,
	numberShift,
	isAdditionalHours,
}) => {
	return (
		<motion.div
			initial={{ y: '-100%' }}
			animate={{ y: '0' }}
			transition={{ duration: 0.3 }}
		>
			<DayStatusContainer>
				<DayStatusGroup>
					<FaGears color="#00c3ff" />
					<DayStatusLabel>{dayStatus}</DayStatusLabel>
				</DayStatusGroup>
				<NumberHours>{numberHours}h</NumberHours>
			</DayStatusContainer>
			<DateInformation>
				<DateGroup>
					<FaCalendarDays size={20} color="#cccccc" />
					<DateLabel>{date}</DateLabel>
				</DateGroup>
				<DateGroup>
					<FaClock size={20} color="#cccccc" />
					<DateLabel>{timeRange}</DateLabel>
				</DateGroup>
				<DateGroup>
					<MdWork size={20} color="#cccccc" />
					<DateLabel>{numberShift}</DateLabel>
				</DateGroup>
			</DateInformation>
			<AdditionalHoursContainer>
				<p>This is additional hours:</p>
				<StatusIndicator isOn={isAdditionalHours} />
			</AdditionalHoursContainer>
		</motion.div>
	)
}

export default Information
