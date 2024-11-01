export type StatusIndicatorProps = {
	isOn: boolean
	size?: number
}

export type IndicatorProps = Pick<StatusIndicatorProps, 'isOn' | 'size'>
