import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { AxiosError, AxiosRequestConfig } from 'axios'

import api, { API_URL } from './api'

const axiosBaseQuery =
	(
		endpointName: string
	): BaseQueryFn<
		{
			url: string
			method: AxiosRequestConfig['method']
			data?: AxiosRequestConfig['data']
			params?: AxiosRequestConfig['params']
			headers?: AxiosRequestConfig['headers']
		},
		unknown,
		unknown
	> =>
	async ({ url, method, data, params, headers }) => {
		try {
			const result = await api({
				url: `${API_URL}${endpointName}/${url}`,
				method,
				data,
				params,
				headers,
			})
			return { data: result.data }
		} catch (axiosError) {
			const err = axiosError as AxiosError
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			}
		}
	}

export default axiosBaseQuery
