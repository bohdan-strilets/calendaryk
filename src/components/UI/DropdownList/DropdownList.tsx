import { AnimatePresence } from 'framer-motion'
import { FieldError, FieldValues, Path, PathValue } from 'react-hook-form'
import { IoMdArrowDropdown } from 'react-icons/io'

import useClickOutside from '@/hooks/useClickOutside'

import { DropdownListProps } from '@/types/props/ui/DropdownListProps'
import { DropdownOption } from '@/types/types/DropdownOption'

import {
	ArrowIconWrapper,
	CheckIcon,
	Error,
	Input,
	Item,
	ItemLabel,
	List,
	MainLabel,
	Required,
	Wrapper,
} from './DropdownList.styled'

const DropdownList = <T extends FieldValues>({
	options,
	register,
	name,
	setValue,
	watch,
	placeholder,
	rules,
	errors,
	width,
	margin,
	listHeight,
	label,
	listPosition,
}: DropdownListProps<T>) => {
	const { isOpen, toggle, divRef } = useClickOutside()

	const selectedValue = watch(name)
	const selected =
		options.find((option) => option.value === selectedValue) || null

	const error = errors?.[name] as FieldError | undefined
	const required = rules?.required

	const selectOption = (option: DropdownOption) => {
		const value = option.value as PathValue<T, Path<T>>
		const nullValue = null as PathValue<T, Path<T>>

		if (selected?.id === option.id) {
			setValue(name, nullValue)
		} else {
			setValue(name, value)
		}

		toggle()
		return
	}

	return (
		<Wrapper margin={margin} width={width} ref={divRef}>
			<MainLabel>
				{label} {required && <Required>*</Required>}
			</MainLabel>
			<Input {...register(name, rules)} onClick={toggle}>
				{selected ? selected.label : placeholder}
				<ArrowIconWrapper opened={isOpen}>
					<IoMdArrowDropdown className="arrow-dropdown" />
				</ArrowIconWrapper>
			</Input>
			<AnimatePresence mode="wait">
				{isOpen && (
					<List
						key="list"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						listHeight={listHeight}
						listPosition={listPosition}
					>
						{options.map(({ id, label, value }) => (
							<Item
								key={id}
								initial={{ y: '-100%', opacity: 0 }}
								animate={{ y: '0%', opacity: 1 }}
								transition={{ duration: 0.2, delay: id * 0.1 }}
							>
								<ItemLabel
									data-value={value}
									onClick={() => selectOption({ id, value, label })}
								>
									{label}
									{selected?.value === value && <CheckIcon />}
								</ItemLabel>
							</Item>
						))}
					</List>
				)}
			</AnimatePresence>
			{error && <Error>{error.message}</Error>}
		</Wrapper>
	)
}

export default DropdownList
