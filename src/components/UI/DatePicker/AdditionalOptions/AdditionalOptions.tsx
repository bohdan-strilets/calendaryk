import { FC } from 'react'
import { MdOutlineCheck } from 'react-icons/md'

import { monthOptions } from '@/utils/dropdownOptions/monthOptions'
import { yearOptions } from '@/utils/dropdownOptions/yearOptions'

import { AdditionalOptionsProps } from '@/types/props/ui/datePicker/AdditionalOptionsProps'

import { Button, Item, List, Wrapper } from './AdditionalOptions.styled'

const AdditionalOptions: FC<AdditionalOptionsProps> = ({
	monthYear,
	getMonth,
	getYear,
}) => {
	return (
		<Wrapper>
			<List>
				{monthOptions.map((item, index) => (
					<Item
						key={item.id}
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{
							duration: 0.3,
							ease: 'easeInOut',
							delay: index * 0.05,
						}}
					>
						<Button type="button" onClick={() => getMonth(item.value)}>
							{item.label}
							{monthYear.month === Number(item.value) && (
								<MdOutlineCheck size={18} color="var(--green-color)" />
							)}
						</Button>
					</Item>
				))}
			</List>
			<List>
				{yearOptions.map((item, index) => (
					<Item
						key={item.id}
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{
							duration: 0.3,
							ease: 'easeInOut',
							delay: index * 0.05,
						}}
					>
						<Button type="button" onClick={() => getYear(item.value)}>
							{item.label}
							{monthYear.year === Number(item.value) && (
								<MdOutlineCheck size={18} color="var(--green-color)" />
							)}
						</Button>
					</Item>
				))}
			</List>
		</Wrapper>
	)
}

export default AdditionalOptions
