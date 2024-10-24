import { FC } from 'react'

import useQuickTimeLapse from '@/hooks/useQuickTimeLapse'
import { QuickTimeLapseProps } from '@/types/props/ui/QuickTimeLapseProps'

import { Button, Item, Label, List } from './QuickTimeLapse.styled'

const QuickTimeLapse: FC<QuickTimeLapseProps> = ({ getTime, margin }) => {
	const { handleSelectTime } = useQuickTimeLapse({ getTime })

	return (
		<List margin={margin}>
			<Item>
				<Button type="button" value="06:00" onClick={handleSelectTime}>
					<Label>06:00</Label>
				</Button>
			</Item>
			<Item>
				<Button type="button" value="10:00" onClick={handleSelectTime}>
					<Label>10:00</Label>
				</Button>
			</Item>
			<Item>
				<Button type="button" value="14:00" onClick={handleSelectTime}>
					<Label>14:00</Label>
				</Button>
			</Item>
			<Item>
				<Button type="button" value="18:00" onClick={handleSelectTime}>
					<Label>18:00</Label>
				</Button>
			</Item>
			<Item>
				<Button type="button" value="22:00" onClick={handleSelectTime}>
					<Label>22:00</Label>
				</Button>
			</Item>
			<Item>
				<Button type="button" value="02:00" onClick={handleSelectTime}>
					<Label>02:00</Label>
				</Button>
			</Item>
		</List>
	)
}

export default QuickTimeLapse
