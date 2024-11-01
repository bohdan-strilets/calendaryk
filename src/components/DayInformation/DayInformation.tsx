import { FC } from 'react'

import { DayStatus } from '@/types/enums/DayStatus'
import { ShiftNumber } from '@/types/enums/ShiftNumber'

import Controllers from './Controllers'
import { Footer } from './DayInformation.styled'
import EarningList from './EarningList'
import Information from './Information'
import TaxList from './TaxList'
import TotalAmount from './TotalAmount'

const DayInformation: FC = () => {
	return (
		<>
			<Information
				dayStatus={DayStatus.WORK}
				date="29 October 2024"
				numberHours={12}
				numberShift={ShiftNumber.SHIFT_1}
				timeRange="06:00 - 18:00"
				isAdditionalHours={true}
			/>

			<EarningList />
			<TotalAmount amount={900} color="var(--red-color)" />
			<TaxList />

			<Footer
				initial={{ y: '100%' }}
				animate={{ y: '0' }}
				transition={{ duration: 0.3 }}
			>
				<Controllers />
				<TotalAmount amount={570.72} color="var(--green-color)" />
			</Footer>
		</>
	)
}

export default DayInformation
