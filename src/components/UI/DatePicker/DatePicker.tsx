import { AnimatePresence } from 'framer-motion'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ImCalendar } from 'react-icons/im'

import SmallCalendar from '@/components/Calendars/SmallCalendar'
import useCalendar from '@/hooks/useCalendar'
import useClickOutside from '@/hooks/useClickOutside'
import useResponsive from '@/hooks/useResponsive'
import { DatePickerInputs } from '@/types/inputs/DatePickerInputs'
import { DatePickerProps } from '@/types/props/ui/DatePickerProps'
import { MonthsOfYear } from '@/utils/data/monthsOfYear'
import { monthOptions } from '@/utils/dropdownOptions/monthOptions'
import { yearOptions } from '@/utils/dropdownOptions/yearOptions'

import Button from '../Button'
import DropdownList from '../DropdownList'
import { Group, Input, Label, Picker, Wrapper } from './DatePicker.styled'

const DatePicker: FC<DatePickerProps> = ({ label, onDateChange, margin }) => {
	const { selectedDate, selectDate } = useCalendar()
	const { isOpen, toggle, divRef } = useClickOutside()
	const { isTablet, isMaxLaptop } = useResponsive()

	const currentMonth = new Date().getMonth()

	const {
		register,
		setValue,
		watch,
		formState: { errors },
	} = useForm<DatePickerInputs>({
		defaultValues: {
			yearList: yearOptions.at(-1)?.value,
			monthList: monthOptions[currentMonth].value,
		},
	})

	const selectedDay = selectedDate.getDate()
	const selectedYear = Number(watch('yearList'))
	const selectedMonth = Number(watch('monthList'))
	const monthName = MonthsOfYear[selectedMonth].name
	const date = new Date(`${selectedYear}-${selectedMonth + 1}-01`)
	const selectedDateByUser = `${selectedDay} ${monthName} ${selectedYear}`

	useEffect(() => {
		if (onDateChange) {
			const date = new Date(selectedYear, selectedMonth, selectedDay)
			onDateChange(date)
		}
	}, [selectedDate, onDateChange])

	return (
		<Wrapper ref={divRef} margin={margin}>
			{label && <Label>{label}</Label>}
			<Input>
				<Group onClick={toggle}>
					<p>{selectedDateByUser}</p>
					<ImCalendar className="calendar-icon" />
				</Group>
				<AnimatePresence mode="wait">
					{isOpen && (
						<Picker
							key="picker"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<SmallCalendar
								cellHeight="40px"
								cellWidth={isMaxLaptop ? '40px' : '45px'}
								borderRadius={true}
								selectDate={selectDate}
								selectedDate={date}
								selectedDay={selectedDay}
								isInteractive={true}
							/>
							<div>
								<DropdownList
									options={yearOptions}
									register={register}
									name="yearList"
									setValue={setValue}
									watch={watch}
									placeholder="Year"
									errors={errors}
									width={isTablet ? '280px' : '100%'}
									listHeight="230px"
									label="Select year"
									listPosition="top"
									margin="0 0 30px 0"
								/>
								<DropdownList
									options={monthOptions}
									register={register}
									name="monthList"
									setValue={setValue}
									watch={watch}
									placeholder="Month"
									errors={errors}
									width={isTablet ? '280px' : '100%'}
									listHeight="230px"
									label="Select month"
									listPosition="top"
									margin="0 0 30px 0"
								/>
								<Button type="button" variant="black" onClick={toggle}>
									Choose
								</Button>
							</div>
						</Picker>
					)}
				</AnimatePresence>
			</Input>
		</Wrapper>
	)
}

export default DatePicker
