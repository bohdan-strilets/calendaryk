import { FC } from 'react'

import { ShiftNumber } from '@/types/enums/ShiftNumber'
import { DayInformationProps } from '@/types/props/dayInformation/DayInformationProps'
import { normalizeDate } from '@/utils/functions/normalizeDate'

import Controllers from './Controllers'
import { Footer } from './DayInformation.styled'
import EarningList from './EarningList'
import Information from './Information'
import TaxList from './TaxList'
import TotalAmount from './TotalAmount'

const DayInformation: FC<DayInformationProps> = ({ day }) => {
	const date = normalizeDate(day.date.toString())

	return (
		<>
			<Information
				dayStatus={day.status}
				date={date}
				numberHours={day.numberHours ?? 0}
				numberShift={day.shiftNumber ?? ShiftNumber.SHIFT_0}
				timeRange={day.timeRange ?? '-'}
				isAdditionalHours={day.isAdditional}
			/>

			{day.grossEarning && (
				<>
					<EarningList />
					<TotalAmount amount={day.grossEarning} color="var(--red-color)" />
					<TaxList />
				</>
			)}

			<Footer
				initial={{ y: '100%' }}
				animate={{ y: '0' }}
				transition={{ duration: 0.3 }}
			>
				<Controllers />
				{day.netEarning && (
					<TotalAmount amount={day.netEarning} color="var(--green-color)" />
				)}
			</Footer>
		</>
	)
}

export default DayInformation
