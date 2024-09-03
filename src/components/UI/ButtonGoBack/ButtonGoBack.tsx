import { FC } from 'react'

import { ButtonGoBackProps } from '@/types/props/ui/ButtonGoBackProps'

import { Button, Icon, Label } from './ButtonGoBack.styled'

const ButtonGoBack: FC<ButtonGoBackProps> = ({ label, margin, onClick }) => {
	return (
		<Button type="button" onClick={onClick} margin={margin}>
			<Icon className="icon" />
			<Label>back to {label}</Label>
		</Button>
	)
}

export default ButtonGoBack
