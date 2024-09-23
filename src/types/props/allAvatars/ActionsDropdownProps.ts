import { GalleryProps } from './GalleryProps'

export type ActionsDropdownProps = {
	url: string
} & Pick<GalleryProps, 'selectImage'>
