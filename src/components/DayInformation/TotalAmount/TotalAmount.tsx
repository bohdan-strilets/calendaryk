import { FC } from 'react'
import { RiCoinsFill } from 'react-icons/ri'

import { TotalAmountProps } from '@/types/props/dayInformation/TotalAmountProps'

import { Label, Wrapper } from './TotalAmount.styled'

const TotalAmount: FC<TotalAmountProps> = ({ amount, color }) => {
	return (
		<Wrapper>
			<RiCoinsFill color="#ffdd00ff" size={32} />
			<Label color={color}>+ {amount} PLN</Label>
		</Wrapper>
	)
}

export default TotalAmount
