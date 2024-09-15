import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { ImCalendar } from 'react-icons/im'

import SmallCalendar from '@/components/Calendars/SmallCalendar'
import useDatePicker from '@/hooks/useDatePicker'
import useResponsive from '@/hooks/useResponsive'
import { DatePickerProps } from '@/types/props/ui/DatePickerProps'
import { monthOptions } from '@/utils/dropdownOptions/monthOptions'
import { yearOptions } from '@/utils/dropdownOptions/yearOptions'

import Button from '../Button'
import DropdownList from '../DropdownList'
import {
	ControllersList,
	CurrentSelect,
	Group,
	Input,
	Label,
	Picker,
	Wrapper,
} from './DatePicker.styled'

const DatePicker: FC<DatePickerProps> = ({
	onDateChange,
	placeholder,
	defaultValue,
	label,
	margin,
}) => {
	const { isTablet, isMaxLaptop } = useResponsive()
	const {
		divRef,
		toggle,
		defaultLabel,
		isOpen,
		selectDate,
		selectedDate,
		selectedDay,
		formattedSelectedDate,
		register,
		setValue,
		watch,
		errors,
		initializeDefaultDate,
		handleDateSelection,
	} = useDatePicker({ defaultValue, onDateChange, placeholder })

	return (
		<Wrapper ref={divRef} margin={margin}>
			{label && <Label>{label}</Label>}
			<Input>
				<Group onClick={toggle}>
					<p>{defaultLabel}</p>
					<ImCalendar className="calendar-icon" />
				</Group>
				<AnimatePresence mode="wait">
					{isOpen && (
						<Picker
							key="picker"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
						>
							<SmallCalendar
								cellHeight="40px"
								cellWidth={isMaxLaptop ? '40px' : '45px'}
								borderRadius={true}
								selectDate={selectDate}
								selectedDate={selectedDate}
								selectedDay={selectedDay}
								isInteractive={true}
							/>
							<div>
								<CurrentSelect>{formattedSelectedDate}</CurrentSelect>
								<DropdownList
									options={yearOptions}
									register={register}
									name="yearList"
									setValue={setValue}
									watch={watch}
									placeholder="Year"
									errors={errors}
									width={isTablet ? '260px' : '100%'}
									listHeight="230px"
									label="Select year"
									listPosition="top"
									margin="0 0 20px 0"
								/>
								<DropdownList
									options={monthOptions}
									register={register}
									name="monthList"
									setValue={setValue}
									watch={watch}
									placeholder="Month"
									errors={errors}
									width={isTablet ? '260px' : '100%'}
									listHeight="230px"
									label="Select month"
									listPosition="top"
									margin="0 0 20px 0"
								/>
								<ControllersList>
									<li>
										<Button
											type="button"
											variant="red"
											onClick={initializeDefaultDate}
											width={isTablet ? '125px' : '100%'}
											margin={isTablet ? '' : '0 0 15px 0'}
										>
											Reset
										</Button>
									</li>
									<li>
										<Button
											type="button"
											variant="green"
											onClick={handleDateSelection}
											width={isTablet ? '125px' : '100%'}
										>
											Choose
										</Button>
									</li>
								</ControllersList>
							</div>
						</Picker>
					)}
				</AnimatePresence>
			</Input>
		</Wrapper>
	)
}

export default DatePicker
