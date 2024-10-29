import { EmploymentContract } from '@/types/enums/EmploymentContract'

const useCalculateTaxes = () => {
	const MINIMUM_HOURLY_RATE = 28.1

	const employmentContractType = EmploymentContract.EMPLOYMENT_CONTRACT
	const isFull26Years = false
	const isStudent = false
	const ppkRate = 0
	const isTaxExempt = !isFull26Years

	const taxRates = {
		incomeTax: 12,
		ppk: ppkRate,
		pensionInsurance: 9.76,
		disabilityInsurance: 1.5,
		healthInsurance: 2.45,
		medicalInsurance: 9,
		nightSupplement: 20,
	}

	const taxThreshold = {
		low: 12,
		high: 32,
	}

	const normalizeNumber = (number: number): number => {
		return Number(number.toFixed(2))
	}

	const calculatePercentage = (percentage: number, amount: number): number => {
		const result = (percentage * amount) / 100
		return normalizeNumber(result)
	}

	const calculateExtraNightHourRate = (): number => {
		return calculatePercentage(taxRates.nightSupplement, MINIMUM_HOURLY_RATE)
	}

	const calculatePpk = (amount: number): number => {
		return calculatePercentage(taxRates.ppk, amount)
	}

	const calculatePensionInsurance = (amount: number): number => {
		return calculatePercentage(taxRates.pensionInsurance, amount)
	}

	const calculateDisabilityInsurance = (amount: number): number => {
		return calculatePercentage(taxRates.disabilityInsurance, amount)
	}

	const calculateHealthInsurance = (amount: number): number => {
		return calculatePercentage(taxRates.healthInsurance, amount)
	}

	const calculateSocialInsurance = (amount: number): number => {
		const pensionInsurance = calculatePensionInsurance(amount)
		const disabilityInsurance = calculateDisabilityInsurance(amount)
		const healthInsurance = calculateHealthInsurance(amount)
		const socialInsurance =
			pensionInsurance + disabilityInsurance + healthInsurance

		return normalizeNumber(socialInsurance)
	}

	const calculateMedicalInsurance = (amount: number): number => {
		return calculatePercentage(taxRates.medicalInsurance, amount)
	}

	const calculateIncomeTax = (amount: number, tax: number): number => {
		if (isTaxExempt) {
			return calculatePercentage(0, amount)
		} else {
			return calculatePercentage(tax, amount)
		}
	}

	return {
		calculateExtraNightHourRate,
		calculatePpk,
		calculatePensionInsurance,
		calculateDisabilityInsurance,
		calculateHealthInsurance,
		calculateSocialInsurance,
		calculateMedicalInsurance,
		calculateIncomeTax,
		taxThreshold,
		normalizeNumber,
	}
}

export default useCalculateTaxes
