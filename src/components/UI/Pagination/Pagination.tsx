import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'

import usePagination from '@/hooks/usePagination'
import { PaginationProps } from '@/types/props/ui/PaginationProps'

import { ArrowButton, Button, Wrapper } from './Pagination.styled'

const Pagination = <T,>({
	data,
	itemsPerPage,
	onPageChange,
}: PaginationProps<T>) => {
	const paginationParams = {
		count: data.length,
		itemsPerPage,
		onPageChange,
		data,
	}

	const {
		totalPages,
		nextPage,
		prevPage,
		goToPage,
		currentPage,
		paginationGaps,
	} = usePagination(paginationParams)

	return (
		<Wrapper>
			<ArrowButton disabled={currentPage === 1} onClick={prevPage}>
				<RiArrowLeftSFill size={25} />
			</ArrowButton>

			<Button onClick={() => goToPage(1)} disabled={currentPage === 1}>
				1
			</Button>

			{paginationGaps.before && <span>...</span>}

			{paginationGaps.paginationGroup.map((page) => (
				<Button
					key={page}
					onClick={() => goToPage(page)}
					disabled={currentPage === page}
				>
					{page}
				</Button>
			))}

			{paginationGaps.after && <span>...</span>}

			<Button
				onClick={() => goToPage(totalPages)}
				disabled={currentPage === totalPages}
			>
				{totalPages}
			</Button>

			<ArrowButton onClick={nextPage} disabled={currentPage === totalPages}>
				<RiArrowRightSFill size={25} />
			</ArrowButton>
		</Wrapper>
	)
}

export default Pagination
