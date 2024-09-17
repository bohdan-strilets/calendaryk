import { useRef, useState } from 'react'

import { UploadFile } from '@/types/params/UploadFile'
import { FileInformation } from '@/types/types/FileInformation'

const useUploadFile = ({ fileName, callback }: UploadFile) => {
	const hiddenFileInput = useRef<HTMLInputElement>(null)
	const [previewSource, setPreviewSource] = useState('')
	const [fileInfo, setFileInfo] = useState<FileInformation | null>(null)

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return

		setFileInfo({ name: file.name, size: file.size })

		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => setPreviewSource(reader.result as string)
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const fileInput = hiddenFileInput.current?.files?.[0]

		if (fileInput) {
			const formData = new FormData()
			formData.append(fileName, fileInput)

			if (callback) {
				await callback({ file: formData })
			}
		}
	}

	const triggerFileInput = () => hiddenFileInput.current?.click()
	const isSelected = fileInfo ? true : false

	return {
		previewSource,
		triggerFileInput,
		handleFileChange,
		handleSubmit,
		hiddenFileInput,
		fileInfo,
		isSelected,
	}
}

export default useUploadFile
