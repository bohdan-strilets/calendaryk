import { MotionProps } from 'framer-motion'

// Определяет анимацию "подпрыгивания" для элемента: движение вверх и вниз по оси Y с бесконечным повторением

export const Bounce = (): MotionProps => ({
	initial: { y: 0 },
	animate: { y: [0, -10, 0, -5, 0] },
	transition: {
		duration: 0.5,
		repeat: Infinity,
		repeatType: 'loop',
		ease: 'easeInOut',
		repeatDelay: 3,
	},
})
