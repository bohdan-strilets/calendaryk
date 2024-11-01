import { FC } from 'react'

import { Coordinates } from '@/types/types/Coordinates'

import Superscript from '../../UI/Superscript'
import { Item, List, Wrapper } from './EarningList.styled'

const EarningList: FC = () => {
	const coordinates: Coordinates = {
		top: -3,
		left: 1,
	}

	return (
		<Wrapper>
			<p>Earning:</p>
			<List
				initial={{ x: '100%' }}
				animate={{ x: '0' }}
				transition={{ duration: 0.3 }}
			>
				<Item>
					<p>
						12<Superscript position={coordinates}>H</Superscript> * 50
						<Superscript position={coordinates}>PLN</Superscript> = 600
						<Superscript position={coordinates}>PLN</Superscript>
					</p>
				</Item>
				<Item>
					<p>
						12<Superscript position={coordinates}>H</Superscript> * 50
						<Superscript position={coordinates}>%</Superscript> = 300
						<Superscript position={coordinates}>PLN</Superscript>
					</p>
				</Item>
			</List>
		</Wrapper>
	)
}

export default EarningList
