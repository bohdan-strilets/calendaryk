import { useCallback, useEffect, useState } from 'react'

const useTimer = (numberSeconds: number) => {
	const [timeLeft, setTimeLeft] = useState(numberSeconds ?? 10)
	const [showTimer, setShowTimer] = useState(false)

	const extraSecond = 1000
	const numberMilliseconds = numberSeconds * 1000 + extraSecond

	useEffect(() => {
		if (timeLeft <= 0) return

		const timerId = setTimeout(() => {
			setTimeLeft(timeLeft - 1)
		}, 1000)

		return () => clearTimeout(timerId)
	}, [timeLeft])

	const startTimer = useCallback(() => {
		setShowTimer(true)
		const timerId = setTimeout(() => {
			setShowTimer(false)
		}, numberMilliseconds)

		return () => clearTimeout(timerId)
	}, [numberMilliseconds])

	return { timeLeft, startTimer, showTimer }
}

export default useTimer
