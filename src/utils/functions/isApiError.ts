import { ApiError } from '@/types/types/ApiError'

export const isApiError = (error: unknown): error is ApiError => {
	return (
		typeof error === 'object' &&
		error !== null &&
		'message' in error &&
		'statusCode' in error
	)
}
