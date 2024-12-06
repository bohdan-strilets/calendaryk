import { FC } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaClipboardList } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6'
import { MdWork } from 'react-icons/md'

import { ShiftNumber } from '@/types/enums/ShiftNumber'
import { EventSummaryCellProps } from '@/types/props/dayInformation/EventSummaryCellProps'

import { Item, Label, List } from './EventSummaryCell.styled'

const EventSummaryCell: FC<EventSummaryCellProps> = ({
	children,
	shiftNumber,
	numberHours,
	isAdditionalHours,
	numberTodo,
}) => {
	return (
		<>
			{children}
			<List>
				{shiftNumber && (
					<Item style={{ backgroundColor: '#b5fff4' }}>
						<Label>
							{shiftNumber === ShiftNumber.SHIFT_0 && '-'}
							{shiftNumber === ShiftNumber.SHIFT_1 && 'I'}
							{shiftNumber === ShiftNumber.SHIFT_2 && 'II'}
						</Label>
						<MdWork color="#19b19a" size={16} />
					</Item>
				)}
				{numberHours && (
					<Item style={{ backgroundColor: '#cafbca' }}>
						<Label>{numberHours}H</Label>
						<FaClock color="#2da02d" size={16} />
					</Item>
				)}
				{isAdditionalHours && (
					<Item style={{ backgroundColor: '#ffd3ff' }}>
						<Label>{isAdditionalHours ? 'Yes' : 'No'}</Label>
						<BsFillPatchCheckFill color="#971c97" size={16} />
					</Item>
				)}
				{numberTodo && (
					<Item style={{ backgroundColor: '#f4e3c3' }}>
						<Label>{numberTodo}</Label>
						<FaClipboardList color="#9d701c" size={16} />
					</Item>
				)}
			</List>
		</>
	)
}

export default EventSummaryCell
