import { DayStatus } from '@/types/enums/DayStatus'
import { ShiftNumber } from '@/types/enums/ShiftNumber'

import useCalculateHours from './useCalculateHours'
import useCalculateTaxes from './useCalculateTaxes'

export const useCalculateEarnings = () => {
	const { calculateHours, calculateNightHours, determineShift } =
		useCalculateHours()
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
	): number => {
		const numberHours = calculateHours(timeRange)
		const dailyEarnings = numberHours * grossHourlyRate
		const numberNightHours = calculateNightHours(timeRange)
		const shiftNumber = determineShift(timeRange)
		const nightHourlyBonus = calculateExtraNightHourRate()
		const nightBonus = numberNightHours * nightHourlyBonus

		if (
			dayStatus === DayStatus.WORK &&
			shiftNumber === ShiftNumber.SHIFT_1 &&
			isAdditionalHours &&
			fiftyPercentHours
		) {
			const fiftyPercentSupplement = fiftyPercentHours * (grossHourlyRate / 2)
			const amount = dailyEarnings + fiftyPercentSupplement
			return normalizeNumber(amount)
		}

		if (dayStatus === DayStatus.WORK && shiftNumber === ShiftNumber.SHIFT_1) {
			return normalizeNumber(dailyEarnings)
		}

		if (
			dayStatus === DayStatus.WORK &&
			shiftNumber === ShiftNumber.SHIFT_2 &&
			isAdditionalHours &&
			(fiftyPercentHours || oneHundredPercentHours)
		) {
			const fiftyPercentSupplement = fiftyPercentHours
				? fiftyPercentHours * (grossHourlyRate / 2)
				: 0
			const hundredPercentSupplement = oneHundredPercentHours
				? oneHundredPercentHours * grossHourlyRate
				: 0
			const amount =
				dailyEarnings +
				nightBonus +
				fiftyPercentSupplement +
				hundredPercentSupplement

			return normalizeNumber(amount)
		}

		if (dayStatus === DayStatus.WORK && shiftNumber === ShiftNumber.SHIFT_2) {
			const amount = dailyEarnings + nightBonus
			return normalizeNumber(amount)
		}

		if (
			dayStatus === DayStatus.VACATION &&
			shiftNumber === ShiftNumber.SHIFT_0
		) {
			return normalizeNumber(dailyEarnings)
		}

		if (
			dayStatus === DayStatus.SICK_LEAVE &&
			shiftNumber === ShiftNumber.SHIFT_0
		) {
			const amount = (dailyEarnings * 80) / 100
			return normalizeNumber(amount)
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
