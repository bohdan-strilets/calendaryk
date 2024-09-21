import { FC, useState } from 'react'

import Gallery from './Gallery'
import Preview from './Preview'

const AllAvatars: FC = () => {
	const [selectedImage, setSelectedImage] = useState<null | string>(null)

	const selectImage = (url: string) => setSelectedImage(url)
	const clearSelectedImage = () => setSelectedImage(null)

	return !selectedImage ? (
		<Gallery selectImage={selectImage} />
	) : (
		<Preview
			selectedImage={selectedImage}
			clearSelectedImage={clearSelectedImage}
		/>
	)
}

export default AllAvatars
