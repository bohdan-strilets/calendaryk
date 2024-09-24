export type DialogProps = {
	message: string
	successCallback: () => void
	negativeCallback: () => void
	isLoading: boolean
	successButtonLabel?: string
	negativeButtonLabel?: string
}
