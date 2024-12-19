import { FC } from 'react'

import { DialogProps } from '@/types/props/ui/DialogProps'

import Button from '../Button'
import Loader from '../Loader'

import { Item, List } from './Dialog.styled'

const Dialog: FC<DialogProps> = ({
	message,
	successCallback,
	negativeCallback,
	isLoading,
	successButtonLabel,
	negativeButtonLabel,
}) => {
	return (
		<div>
			<p>{message}</p>
			{isLoading && <Loader />}
			<List>
				<Item>
					<Button
						type="button"
						variant="red"
						onClick={negativeCallback}
						disabled={isLoading}
					>
						{negativeButtonLabel ? negativeButtonLabel : 'Cancel'}
					</Button>
				</Item>
				<Item>
					<Button
						type="button"
						variant="green"
						onClick={successCallback}
						disabled={isLoading}
					>
						{successButtonLabel ? successButtonLabel : 'Ok'}
					</Button>
				</Item>
			</List>
		</div>
	)
}

export default Dialog
