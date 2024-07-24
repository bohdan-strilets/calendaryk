export const getCopyright = () => {
	const startYear = 2024
	const currentYear = new Date().getFullYear()

	if (startYear === currentYear) {
		return `© SCHEDULE ${startYear}`
	}

	return `© SCHEDULE ${startYear} - ${currentYear}`
}
