const NumberBytesInMegabyte = 1024

export const bytesToMegabytes = (bytes: number): number => {
	const megabytes = bytes / (NumberBytesInMegabyte * NumberBytesInMegabyte)
	const megabyteFixed = parseFloat(megabytes.toFixed(3))
	return megabyteFixed
}
