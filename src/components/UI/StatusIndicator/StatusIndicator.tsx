import { FC } from 'react'

import { StatusIndicatorProps } from '@/types/props/ui/StatusIndicatorProps'

import { Indicator } from './StatusIndicator.styled'

const StatusIndicator: FC<StatusIndicatorProps> = ({ isOn, size }) => {
	return <Indicator isOn={isOn} size={size} />
}

export default StatusIndicator
