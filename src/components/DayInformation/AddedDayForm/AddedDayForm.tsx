import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import Checkbox from '@/components/UI/Checkbox'
import DropdownList from '@/components/UI/DropdownList'
import Loader from '@/components/UI/Loader'
import QuickTimeLapse from '@/components/UI/QuickTimeLapse'
import { useCalculateHours } from '@/hooks/useCalculateHours'
import { AddedDayFields } from '@/types/inputs/AddedDayFields'
import { dayStatusOptions } from '@/utils/dropdownOptions/dayStatusOptions'
import { hoursOptions } from '@/utils/dropdownOptions/hoursOptions'
import { validation } from '@/validation/AddedDaySchema'

const AddedDayForm: FC = () => {
	const [quickStartTime, setQuickStartTime] = useState<null | string>(null)
	const [quickFinishTime, setQuickFinishTime] = useState<null | string>(null)

	const [isAdditional, setIsAdditional] = useState(false)
	const loading = false

	const {
		register,
		setValue,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<AddedDayFields>(validation)
	const { calculateHours } = useCalculateHours()

	useEffect(() => {
		if (quickStartTime) {
			setValue('start', quickStartTime)
		}
		if (quickFinishTime) {
			setValue('end', quickFinishTime)
		}
	}, [quickFinishTime, quickStartTime, setValue])

	const onSubmit: SubmitHandler<AddedDayFields> = async (data) => {
		const timeRange = `${data.start}-${data.end}`

		const dto = {
			date: new Date(),
			status: data.dayStatus,
			numberHours: calculateHours(timeRange),
			timeRange: timeRange,
			shiftNumber: 1,
			isAdditional: data.isAdditional,
			grossEarning: 0,
			netEarning: 0,
		}
		console.log(dto)
	}

	const handleCheckboxChange = () => {
		setIsAdditional(!isAdditional)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<DropdownList
				options={dayStatusOptions}
				register={register}
				name="dayStatus"
				setValue={setValue}
				watch={watch}
				placeholder="Day status"
				errors={errors}
				listHeight="230px"
				label="Select status for current day"
				listPosition="bottom"
				margin="0 0 20px 0"
			/>
			<DropdownList
				options={hoursOptions}
				register={register}
				name="start"
				setValue={setValue}
				watch={watch}
				placeholder="Start time"
				errors={errors}
				listHeight="230px"
				label="Select start shift time"
				listPosition="bottom"
				margin="0 0 10px 0"
			/>
			<QuickTimeLapse getTime={setQuickStartTime} margin="0 0 20px 0" />
			<DropdownList
				options={hoursOptions}
				register={register}
				name="end"
				setValue={setValue}
				watch={watch}
				placeholder="End time"
				errors={errors}
				listHeight="230px"
				label="Select end shift time"
				listPosition="bottom"
				margin="0 0 10px 0"
			/>
			<QuickTimeLapse getTime={setQuickFinishTime} margin="0 0 20px 0" />
			<Checkbox
				name="isAdditional"
				register={register}
				setValue={(name, value) => {
					setValue(name, value)
					handleCheckboxChange()
				}}
				watch={watch}
				rules={{ isChecked: isAdditional }}
				errors={errors}
				label="Please indicate if this is an additional working day."
				margin="0 0 20px 0"
			/>
			{loading && <Loader margin="25px 0 25px 0" />}
			<Button type="submit" height="45px" disabled={loading}>
				Added
			</Button>
		</form>
	)
}

export default AddedDayForm
