export const getPublicCloudinaryId = (url: string): string | null => {
	try {
		const urlObj = new URL(url)
		const pathSegments = urlObj.pathname.split('/')

		const uploadIndex = pathSegments.indexOf('upload')

		if (uploadIndex === -1 || pathSegments.length <= uploadIndex + 1) {
			return null
		}

		const publicId = pathSegments.slice(uploadIndex + 2).join('/')

		return publicId.replace(/\.[^/.]+$/, '')
	} catch (error) {
		return null
	}
}
