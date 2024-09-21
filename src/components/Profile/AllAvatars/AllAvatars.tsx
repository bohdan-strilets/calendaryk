import { FC, useEffect, useState } from 'react'

import Pagination from '@/components/UI/Pagination'
import { useAppSelector } from '@/hooks/useAppSelector'
import { getAvatars } from '@/store/user/userSelectors'

import { Image, Item, List } from './AllAvatars.styled'
import Preview from './Preview'

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
		<Preview
			selectedImage={selectedImage}
			clearSelectedImage={clearSelectedImage}
		/>
	)
}

export default AllAvatars
