import { ShiftNumber } from '@/types/enums/ShiftNumber'

export const useCalculateHours = () => {
	const START_NIGHT_TIME = 22
	const END_NIGHT_TIME = 6
	const MID_NIGHT = 24
	const START_SECOND_SHIFT = 18

	const parsedTimeRange = (timeRange: string): [number, number] => {
		const [start, end] = timeRange
			.split('-')
			.map((time) => Number(time.split(':')[0]))
		return [start, end]
	}

	const calculateHours = (timeRange: string): number => {
		const [start, end] = parsedTimeRange(timeRange)
		return end >= start ? end - start : MID_NIGHT - start + end
	}

	const calculateNightHours = (timeRange: string): number => {
		const [start, end] = parsedTimeRange(timeRange)

		let nightHours = 0

		if (end <= start) {
			if (start < MID_NIGHT) {
				nightHours += Math.max(0, MID_NIGHT - Math.max(start, START_NIGHT_TIME))
			}
			nightHours += Math.max(0, Math.min(end, END_NIGHT_TIME))
		} else {
			if (start < START_NIGHT_TIME && end > START_NIGHT_TIME) {
				nightHours += Math.min(end, MID_NIGHT) - START_NIGHT_TIME
			}
			if (start < END_NIGHT_TIME || end <= END_NIGHT_TIME) {
				nightHours += Math.min(end, END_NIGHT_TIME) - Math.max(start, 0)
			}
		}

		return nightHours
	}

	const transformNumberToHour = (hour: number): string => {
		return hour.toString().padStart(2, '0')
	}

	const calculateAdditionalHours = (timeRange: string) => {
		const [start, end] = parsedTimeRange(timeRange)
		const totalHours = calculateHours(timeRange)

		const result = {
			fiftyPercent: { timeRange: '', numberHours: 0 },
			oneHundredPercent: { timeRange: '', numberHours: 0 },
		}

		if (start <= end && end <= START_NIGHT_TIME && end >= start) {
			result.fiftyPercent = { timeRange, numberHours: totalHours }
			return result
		} else {
			const hours = START_NIGHT_TIME - start
			result.fiftyPercent = {
				timeRange: `${transformNumberToHour(start)}:00-${START_NIGHT_TIME}:00`,
				numberHours: START_NIGHT_TIME - start,
			}
			result.oneHundredPercent = {
				timeRange: `${START_NIGHT_TIME}:00-${transformNumberToHour(end)}:00`,
				numberHours: totalHours - hours,
			}
			return result
		}
	}

	const determineShift = (timeRange: string): ShiftNumber => {
		const [start, end] = parsedTimeRange(timeRange)

		if (start <= end && end <= START_SECOND_SHIFT && end >= start) {
			return ShiftNumber.SHIFT_1
		} else {
			return ShiftNumber.SHIFT_2
		}
	}

	return {
		calculateHours,
		calculateNightHours,
		calculateAdditionalHours,
		determineShift,
		parsedTimeRange,
		START_NIGHT_TIME,
	}
}

export default useCalculateHours
