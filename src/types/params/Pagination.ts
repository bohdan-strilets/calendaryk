import { PaginationProps } from '../props/ui/PaginationProps'

export type Pagination<T> = {
	count: number
} & Pick<PaginationProps<T>, 'itemsPerPage' | 'onPageChange' | 'data'>
