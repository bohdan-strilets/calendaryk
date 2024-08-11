import { FieldError, FieldValues } from 'react-hook-form'

import { TextFieldProps } from '@/types/props/ui/TextFieldProps'

import { Error, Input, Label, Required, Wrapper } from './TextField.styled'

const TextField = <T extends FieldValues>({
	label,
	register,
	name,
	rules,
	placeholder,
	type,
	errors,
	width,
	height,
	margin,
	padding,
}: TextFieldProps<T>) => {
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
				type={type}
				width={width}
				height={height}
				padding={padding}
			/>
			{error && <Error>{error.message}</Error>}
		</Wrapper>
	)
}

export default TextField
