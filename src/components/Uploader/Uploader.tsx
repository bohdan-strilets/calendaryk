import { FC } from 'react'

import { useAppSelector } from '@/hooks/useAppSelector'
import useUploadFile from '@/hooks/useUploadFile'
import { getLoading } from '@/store/user/userSelectors'
import { UploaderProps } from '@/types/props/uploader/UploaderProps'

import Button from '../UI/Button'
import Loader from '../UI/Loader'
import Preview from './Preview'
import {
	AccentText,
	ButtonLabel,
	Input,
	Text,
	UploadButton,
	UploadIcon,
} from './Uploader.styled'

const Uploader: FC<UploaderProps> = ({
	fileName,
	fileTypes,
	fileSize,
	callback,
}) => {
	const {
		handleFileChange,
		handleSubmit,
		hiddenFileInput,
		previewSource,
		triggerFileInput,
		fileInfo,
		isSelected,
	} = useUploadFile({ fileName, callback })
	const loading = useAppSelector(getLoading)

	const formatFileTypes = fileTypes.split(',').join(' ')

	return (
		<>
			<Text>
				The selected file must be in one of the following formats{' '}
				<AccentText>{formatFileTypes}</AccentText>. The file must not exceed{' '}
				<AccentText>{fileSize} MB</AccentText>
			</Text>
			<form encType="multipart/from-data" onSubmit={handleSubmit}>
				<label>
					<Input
						type="file"
						name={fileName}
						ref={hiddenFileInput}
						multiple
						accept={fileTypes}
						onChange={handleFileChange}
					/>
					<UploadButton
						type="button"
						onClick={triggerFileInput}
						isSelected={isSelected}
					>
						<UploadIcon className="upload-icon" />
						<ButtonLabel>Select file</ButtonLabel>
					</UploadButton>
				</label>
				{previewSource && (
					<Preview
						previewSource={previewSource}
						fileInfo={fileInfo}
						validationSizeFile={fileSize}
					/>
				)}
				{loading && <Loader margin="25px 0 25px 0" />}
				<Button
					type="submit"
					height="45px"
					margin="20px 0 0 0"
					disabled={loading}
				>
					Change
				</Button>
			</form>
		</>
	)
}

export default Uploader
