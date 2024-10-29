import { DayStatus } from '@/types/enums/DayStatus'
import { ShiftNumber } from '@/types/enums/ShiftNumber'

import useCalculateHours from './useCalculateHours'
import useCalculateTaxes from './useCalculateTaxes'

export const useCalculateEarnings = () => {
	const {
		calculateHours,
		calculateNightHours,
		determineShift,
		parsedTimeRange,
		START_NIGHT_TIME,
	} = useCalculateHours()
	const { calculateExtraNightHourRate } = useCalculateTaxes()

	const {
		calculatePpk,
		calculateSocialInsurance,
		calculateHealthInsurance,
		calculateIncomeTax,
		taxThreshold,
		normalizeNumber,
	} = useCalculateTaxes()

	const calculateEarningsDay = (
		timeRange: string,
		dayStatus: DayStatus,
		grossHourlyRate: number,
		isAdditionalHours: boolean,
		fiftyPercentHours?: number,
		oneHundredPercentHours?: number
	) => {
		const numberHours = calculateHours(timeRange)
		const [start] = parsedTimeRange(timeRange)

		const dailyEarnings = numberHours * grossHourlyRate
		const numberNightHours = calculateNightHours(timeRange)
		const shiftNumber = determineShift(timeRange)
		const nightHourlyBonus = calculateExtraNightHourRate()
		const nightBonus = numberNightHours * nightHourlyBonus

		if (
			shiftNumber === ShiftNumber.SHIFT_2 &&
			isAdditionalHours &&
			fiftyPercentHours &&
			oneHundredPercentHours
		) {
			const fiftyPercentSupplement = fiftyPercentHours * (grossHourlyRate / 2)
			const hundredPercentSupplement = oneHundredPercentHours * grossHourlyRate
			return (
				dailyEarnings +
				nightBonus +
				fiftyPercentSupplement +
				hundredPercentSupplement
			)
		}

		if (
			shiftNumber === ShiftNumber.SHIFT_2 &&
			!isAdditionalHours &&
			start >= START_NIGHT_TIME
		) {
			return dailyEarnings + nightBonus
		}

		if (
			shiftNumber === ShiftNumber.SHIFT_2 &&
			!isAdditionalHours &&
			start < START_NIGHT_TIME
		) {
			return dailyEarnings
		}

		if (
			shiftNumber === ShiftNumber.SHIFT_2 &&
			isAdditionalHours &&
			start >= START_NIGHT_TIME &&
			oneHundredPercentHours
		) {
			const hundredPercentSupplement = oneHundredPercentHours * grossHourlyRate
			return dailyEarnings + nightBonus + hundredPercentSupplement
		}

		if (
			shiftNumber === ShiftNumber.SHIFT_2 &&
			isAdditionalHours &&
			start < START_NIGHT_TIME &&
			fiftyPercentHours
		) {
			const fiftyPercentSupplement = fiftyPercentHours * (grossHourlyRate / 2)
			return dailyEarnings + nightBonus + fiftyPercentSupplement
		}

		if (shiftNumber === ShiftNumber.SHIFT_1 && !isAdditionalHours) {
			return dailyEarnings
		}

		if (
			shiftNumber === ShiftNumber.SHIFT_1 &&
			isAdditionalHours &&
			fiftyPercentHours
		) {
			const fiftyPercentSupplement = fiftyPercentHours * (grossHourlyRate / 2)
			return dailyEarnings + fiftyPercentSupplement
		}

		if (shiftNumber === ShiftNumber.SHIFT_2 && !isAdditionalHours) {
			return dailyEarnings + nightBonus
		}

		if (
			shiftNumber === ShiftNumber.SHIFT_0 &&
			dayStatus === DayStatus.VACATION
		) {
			return dailyEarnings
		}

		if (
			shiftNumber === ShiftNumber.SHIFT_0 &&
			dayStatus === DayStatus.SICK_LEAVE
		) {
			return (dailyEarnings * 80) / 100
		}

		return 0
	}

	const calculateNetSalary = (grossSalary: number): number => {
		const ppk = calculatePpk(grossSalary)
		const socialInsurance = calculateSocialInsurance(grossSalary)
		const afterSocialInsurance = grossSalary - socialInsurance
		const healthInsurance = calculateHealthInsurance(afterSocialInsurance)
		const afterHealthInsurance = afterSocialInsurance - healthInsurance
		const incomeTax = calculateIncomeTax(afterHealthInsurance, taxThreshold.low)

		const netSalary =
			grossSalary - socialInsurance - healthInsurance - incomeTax - ppk

		return normalizeNumber(netSalary)
	}

	return { calculateEarningsDay, calculateNetSalary }
}

export default useCalculateEarnings
