import { AxiosError } from 'axios'

import { ApiError } from '@/types/types/ApiError'

export const handleApiError = (
	error: unknown,
	rejectWithValue: (value: ApiError | string) => void
): ReturnType<typeof rejectWithValue> | void => {
	if (error instanceof AxiosError) {
		if (error.response && error.response.data) {
			const apiError = error.response.data as ApiError
			return rejectWithValue(apiError)
		}
		return rejectWithValue(error.message)
	} else if (error instanceof Error) {
		return rejectWithValue(error.message)
	} else {
		return rejectWithValue('An unspecified error occurred.')
	}
}
