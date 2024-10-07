import { FC } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { RiSettings6Fill } from 'react-icons/ri'

import { ControllersProps } from '@/types/props/ui/datePicker/ControllersProps'

import {
	Button,
	DateInfo,
	Label,
	SettingIconWrapper,
	Wrapper,
} from './Controllers.styled'

const Controllers: FC<ControllersProps> = ({
	handlePrevMonth,
	handleNextMonth,
	handleOpenAdditionalOptions,
	year,
	monthName,
	isOpen,
}) => {
	return (
		<Wrapper>
			<Button type="button" onClick={handlePrevMonth}>
				<MdArrowBackIos />
			</Button>
			<DateInfo>
				<Label>
					{monthName} {year}
				</Label>
				<Button type="button" width={35} onClick={handleOpenAdditionalOptions}>
					<SettingIconWrapper isOpen={isOpen}>
						<RiSettings6Fill />
					</SettingIconWrapper>
				</Button>
			</DateInfo>
			<Button type="button" onClick={handleNextMonth}>
				<MdArrowForwardIos />
			</Button>
		</Wrapper>
	)
}

export default Controllers
