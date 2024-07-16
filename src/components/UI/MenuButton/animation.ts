import { Transition } from 'framer-motion'

export const bounce: Transition = {
	duration: 1,
	repeat: Infinity,
	repeatType: 'loop',
	ease: 'easeOut',
	repeatDelay: 2,
}

export const animationProperty = { x: ['0%', '-10%', '0%', '-10%', '0%'] }
