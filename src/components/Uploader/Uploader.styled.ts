import styled from '@emotion/styled'
import { IoMdCloudUpload } from 'react-icons/io'

import { UploadButtonProps } from '@/types/props/uploader/UploaderProps'

export const Text = styled.p`
	margin-bottom: 15px;
`

export const AccentText = styled.span`
	font-weight: 700;
`

export const Input = styled.input`
	display: none;
`

export const UploadButton = styled.button<UploadButtonProps>`
	width: 100%;
	height: 300px;

	background-color: var(--white-color);
	border: 2px dotted #cccccc;
	margin-bottom: ${({ isSelected }) => (isSelected ? '15px' : 0)};

	cursor: pointer;

	:hover .upload-icon,
	:focus .upload-icon {
		color: var(--gray-color);
	}

	:active {
		transform: scale(0.99);
	}
`

export const UploadIcon = styled(IoMdCloudUpload)`
	width: 120px;
	height: 120px;

	color: var(--green-color);
	transition: var(--hover-effect);
`

export const ButtonLabel = styled.p`
	font-family: var(--second-font);
	font-size: 43px;
	font-weight: 700;

	color: var(--gray-color);
`
