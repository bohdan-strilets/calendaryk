export type QuickTimeLapseProps = {
	getTime: (time: string | null) => void
	margin?: string
}

export type ListProps = Pick<QuickTimeLapseProps, 'margin'>
