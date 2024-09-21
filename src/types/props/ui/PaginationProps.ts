export type PaginationProps<T> = {
	data: T[]
	itemsPerPage: number
	onPageChange: (pageData: T[]) => void
}
