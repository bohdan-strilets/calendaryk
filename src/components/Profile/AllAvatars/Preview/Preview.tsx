import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { BiCollapse } from 'react-icons/bi'

import Avatar from '@/components/UI/Avatar'
import { PreviewProps } from '@/types/props/allAvatars/PreviewProps'

import { Button, Wrapper } from './Preview.styled'

const Preview: FC<PreviewProps> = ({ selectedImage, clearSelectedImage }) => {
	return (
		<AnimatePresence>
			{selectedImage && (
				<Wrapper
					initial={{ opacity: 0, scale: 0.8, y: '100%' }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.8, y: '100%' }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<Button type="button" onClick={clearSelectedImage}>
						<BiCollapse size={24} />
					</Button>
					<Avatar imageUrl={selectedImage ?? ''} height="480px" width="100%" />
				</Wrapper>
			)}
		</AnimatePresence>
	)
}

export default Preview
