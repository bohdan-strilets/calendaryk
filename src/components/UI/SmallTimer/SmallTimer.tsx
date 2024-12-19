import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'

import useTimer from '@/hooks/useTimer'

import { formatTime } from '@/utils/functions/formatTime'

import { SmallTimerProps } from '@/types/props/ui/SmallTimerProps'

import { Message, Time, Wrapper } from './SmallTimer.styled'

const SmallTimer: FC<SmallTimerProps> = ({
	numberSeconds,
	message,
	textAlign,
}) => {
	const { timeLeft } = useTimer(numberSeconds)

	return (
		<AnimatePresence mode="wait">
			{timeLeft > 0 && (
				<Wrapper
					textAlign={textAlign}
					key="smallTimer"
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 15 }}
					exit={{ opacity: 0, y: -15 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					{message && (
						<>
							<Message>{message}</Message>
							<span> - </span>
						</>
					)}
					<AnimatePresence mode="wait">
						<Time
							key={timeLeft}
							initial={{ opacity: 0, y: 5, scale: 0.8, x: 5 }}
							animate={{ opacity: 1, y: 0, scale: 1, x: 5 }}
							exit={{ opacity: 0, y: -5, scale: 0.8, x: 5 }}
							transition={{ duration: 0.2, ease: 'easeInOut' }}
							style={{ position: 'absolute' }}
						>
							{formatTime(timeLeft)}
						</Time>
					</AnimatePresence>
				</Wrapper>
			)}
		</AnimatePresence>
	)
}

export default SmallTimer
