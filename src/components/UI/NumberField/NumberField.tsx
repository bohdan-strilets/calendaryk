import { FieldError, FieldValues } from 'react-hook-form'

import { NumberFieldProps } from '@/types/props/ui/NumberFieldProps'

import { Error, Input, Label, Required, Wrapper } from './NumberField.styled'

const NumberField = <T extends FieldValues>({
	label,
	register,
	name,
	rules,
	placeholder,
	errors,
	width,
	height,
	margin,
	padding,
	defaultValue,
}: NumberFieldProps<T>) => {
	const error = errors?.[name] as FieldError | undefined
	const required = rules?.required

	return (
		<Wrapper margin={margin}>
			{label && (
				<Label>
					{label} {required && <Required>*</Required>}
				</Label>
			)}
			<Input
				{...register(name, rules)}
				placeholder={placeholder}
				type="number"
				width={width}
				height={height}
				padding={padding}
				defaultValue={defaultValue}
			/>
			{error && <Error>{error.message}</Error>}
		</Wrapper>
	)
}

export default NumberField
