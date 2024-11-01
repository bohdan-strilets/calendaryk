import { Coordinates } from '@/types/types/Coordinates'

export type SuperscriptProps = {
	children: string
	position: Coordinates
	color?: string
}

export type WrapperProps = Pick<SuperscriptProps, 'position' | 'color'>
