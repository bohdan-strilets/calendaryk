import { useEffect, useState } from 'react'
import { FieldError, FieldValues, Path, PathValue } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'

import { CheckboxProps } from '@/types/props/ui/CheckboxProps'

import { CustomCheckbox, Error, Group, Input, Wrapper } from './Checkbox.styled'

const Checkbox = <T extends FieldValues>({
	register,
	setValue,
	watch,
	name,
	children,
	rules,
	errors,
	margin,
}: CheckboxProps<T>) => {
	const [isChecked, setIsChecked] = useState(rules?.isChecked)

	const error = errors?.[name] as FieldError | undefined
	const disabled = rules?.disabled
	const currentValue = watch(name)

	useEffect(() => {
		setIsChecked(currentValue)
	}, [currentValue])

	const handleCheckboxChange = () => {
		if (!disabled) {
			const newCheckedState = !isChecked as PathValue<T, Path<T>>
			setIsChecked(newCheckedState)
			setValue(name, newCheckedState)
		}
	}

	return (
		<Wrapper margin={margin} onClick={handleCheckboxChange}>
			<Group>
				<Input {...register(name, rules)} type="checkbox" />
				<CustomCheckbox
					isChecked={isChecked}
					disabled={disabled}
					className="checkbox"
				>
					{isChecked && <HiCheck size={20} />}
				</CustomCheckbox>
				{children && <div>{children}</div>}
			</Group>

			{error && <Error>{error.message}</Error>}
		</Wrapper>
	)
}

export default Checkbox
