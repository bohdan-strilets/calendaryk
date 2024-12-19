import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

import useClickOutside from '@/hooks/useClickOutside'

import { DropdownMenuProps } from '@/types/props/ui/DropdownMenuProps'

import {
	Button,
	ButtonLabel,
	DropdownToggle,
	Item,
	List,
	Wrapper,
} from './DropdownMenu.styled'

const DropdownMenu: FC<DropdownMenuProps> = ({ menuItems }) => {
	const { toggle, isOpen, divRef } = useClickOutside()

	return (
		<Wrapper ref={divRef}>
			<DropdownToggle type="button" onClick={toggle}>
				<BsThreeDotsVertical />
			</DropdownToggle>
			<AnimatePresence>
				{isOpen && (
					<List
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.2 }}
					>
						{menuItems.map((item, index) => (
							<Item
								key={item.id}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.2, delay: index * 0.1 }}
							>
								<Button onClick={item.callback}>
									<ButtonLabel>{item.label}</ButtonLabel>
									{item.icon}
								</Button>
							</Item>
						))}
					</List>
				)}
			</AnimatePresence>
		</Wrapper>
	)
}

export default DropdownMenu
