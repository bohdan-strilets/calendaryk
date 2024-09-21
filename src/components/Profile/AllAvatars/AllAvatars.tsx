import { AnimatePresence } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { BiCollapse } from 'react-icons/bi'

import Avatar from '@/components/UI/Avatar'
import Pagination from '@/components/UI/Pagination'
import { useAppSelector } from '@/hooks/useAppSelector'
import { getAvatars } from '@/store/user/userSelectors'

import {
	CollapseButton,
	Image,
	Item,
	List,
	PreviewWrapper,
} from './AllAvatars.styled'

const AllAvatars: FC = () => {
	const [selectedImage, setSelectedImage] = useState<null | string>(null)
	const [currentPageData, setCurrentPageData] = useState<string[]>([])

	const allAvatars = useAppSelector(getAvatars) ?? []
	const itemsPerPage = 6

	const selectImage = (url: string) => setSelectedImage(url)
	const clearSelectedImage = () => setSelectedImage(null)
	const handlePageChange = (pageData: string[]) => {
		setCurrentPageData(pageData)
	}

	useEffect(() => {
		if (allAvatars.length > 0) {
			const initialPageData = allAvatars.slice(0, itemsPerPage)
			handlePageChange(initialPageData)
		}
	}, [allAvatars])

	return !selectedImage ? (
		<>
			<List>
				{currentPageData?.map((url, index) => (
					<Item
						key={url}
						onClick={() => selectImage(url)}
						initial={{ y: '-100%', opacity: 0 }}
						animate={{ y: '0%', opacity: 1 }}
						transition={{ duration: 0.2, delay: index * 0.1 }}
					>
						<Image url={url} />
					</Item>
				))}
			</List>
			{allAvatars?.length > itemsPerPage && (
				<Pagination<string>
					data={allAvatars}
					itemsPerPage={itemsPerPage}
					onPageChange={handlePageChange}
				/>
			)}
		</>
	) : (
		<AnimatePresence>
			{selectedImage && (
				<PreviewWrapper
					initial={{ opacity: 0, scale: 0.8, y: '100%' }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.8, y: '100%' }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<CollapseButton type="button" onClick={clearSelectedImage}>
						<BiCollapse size={24} />
					</CollapseButton>
					<Avatar imageUrl={selectedImage ?? ''} height="480px" width="100%" />
				</PreviewWrapper>
			)}
		</AnimatePresence>
	)
}

export default AllAvatars
