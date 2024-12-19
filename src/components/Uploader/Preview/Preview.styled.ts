import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { screenWidth } from '@/utils/data/screenWidth'

import { ImageSizeProps } from '@/types/props/uploader/PreviewProps'

export const Wrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
`

export const Image = styled.img`
	width: 260px;
	margin-bottom: 15px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 300px;
	}
`

export const NameWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const ImageName = styled.p`
	font-weight: 700;
`

export const ImageSize = styled.p<ImageSizeProps>`
	color: ${({ imageSize, validationSizeFile }) =>
		imageSize > validationSizeFile ? 'var(--red-color)' : 'var(--green-color)'};
`
