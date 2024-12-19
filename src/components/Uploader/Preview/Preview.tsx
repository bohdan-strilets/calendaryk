import { FC, useEffect, useState } from 'react'

import { bytesToMegabytes } from '@/utils/functions/bytesToMegabytes'

import { PreviewProps } from '@/types/props/uploader/PreviewProps'

import {
	Image,
	ImageName,
	ImageSize,
	NameWrapper,
	Wrapper,
} from './Preview.styled'

const Preview: FC<PreviewProps> = ({
	previewSource,
	fileInfo,
	validationSizeFile,
}) => {
	const [imageSize, setImageSize] = useState(0)

	useEffect(() => {
		if (fileInfo) {
			setImageSize(bytesToMegabytes(fileInfo.size))
		}
	}, [fileInfo])

	return (
		<Wrapper
			initial={{ y: '-100%' }}
			animate={{ y: ['0%', '1%', '0%'] }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.5 }}
		>
			<div>
				<Image src={previewSource} alt="User selected image" />
				{fileInfo && (
					<NameWrapper>
						<ImageName>{fileInfo?.name}</ImageName>
						<ImageSize
							imageSize={imageSize}
							validationSizeFile={validationSizeFile}
						>
							{imageSize} KB
						</ImageSize>
					</NameWrapper>
				)}
			</div>
		</Wrapper>
	)
}

export default Preview
