import { useEffect, useState } from 'react'

import { QuickTimeLapse } from '@/types/params/QuickTimeLapse'

const useQuickTimeLapse = ({ getTime }: QuickTimeLapse) => {
	const [selectedTime, setSelectedTime] = useState<null | string>(null)

	const handleSelectTime = (e: React.MouseEvent<HTMLButtonElement>) => {
		const time = e.currentTarget.value
		setSelectedTime(time)
	}

	useEffect(() => {
		getTime(selectedTime)
	}, [getTime, selectedTime])

	return { handleSelectTime }
}

export default useQuickTimeLapse
