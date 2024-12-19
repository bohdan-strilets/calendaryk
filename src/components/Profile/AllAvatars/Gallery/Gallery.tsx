import { FC, useEffect, useState } from 'react'

import Pagination from '@/components/UI/Pagination'

import { useAppSelector } from '@/hooks/useAppSelector'

import { getAvatars } from '@/store/user/userSelectors'

import { GalleryProps } from '@/types/props/allAvatars/GalleryProps'

import ActionsDropdown from '../ActionsDropdown'

import { Image, Item, List } from './Gallery.styled'

const Gallery: FC<GalleryProps> = ({ selectImage }) => {
	const [currentPageData, setCurrentPageData] = useState<string[]>([])

	const allAvatars = useAppSelector(getAvatars) ?? []
	const itemsPerPage = 6

	const handlePageChange = (pageData: string[]) => {
		setCurrentPageData(pageData)
	}

	useEffect(() => {
		if (allAvatars.length > 0) {
			const initialPageData = allAvatars.slice(0, itemsPerPage)
			handlePageChange(initialPageData)
		}
	}, [allAvatars])

	return (
		<>
			<List>
				{currentPageData?.map((url, index) => (
					<Item
						key={url}
						initial={{ y: '-100%', opacity: 0 }}
						animate={{ y: '0%', opacity: 1 }}
						transition={{ duration: 0.2, delay: index * 0.1 }}
					>
						<Image url={url}>
							<ActionsDropdown selectImage={selectImage} url={url} />
						</Image>
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
	)
}

export default Gallery
