import { FileFormData } from '@/types/types/FileFormData'

export type UploaderProps = {
	fileName: string
	fileTypes: string
	fileSize: number
	callback?: (params: FileFormData) => Promise<void>
}

export type UploadButtonProps = {
	isSelected: boolean
}
