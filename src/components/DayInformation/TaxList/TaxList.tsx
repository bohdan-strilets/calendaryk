import { FC } from 'react'

import { Item, List } from './TaxList.styled'

const TaxList: FC = () => {
	return (
		<List
			initial={{ x: '-100%' }}
			animate={{ x: '0' }}
			transition={{ duration: 0.3 }}
		>
			<Item>
				<p>Pension insurance (9.76%)</p>
				<p>-79.06 PLN</p>
			</Item>
			<Item>
				<p>Disability insurance (1.5%)</p>
				<p>-12.15 PLN</p>
			</Item>
			<Item>
				<p>Health insurance (2.45%)</p>
				<p>-19.85 PLN</p>
			</Item>
			<Item>
				<p>Medical insurance (9%)</p>
				<p>-62.9 PLN</p>
			</Item>
			<Item>
				<p>Income tax (12%)</p>
				<p>-73.62 PLN</p>
			</Item>
		</List>
	)
}

export default TaxList
