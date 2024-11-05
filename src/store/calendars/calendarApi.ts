import { createApi } from '@reduxjs/toolkit/query/react'

import axiosBaseQuery from '@/api/axiosBaseQuery'
import { AddedDayDto } from '@/types/dto/AddedDayDto'
import { UpdateDayDto } from '@/types/dto/UpdateDayDto'
import { Day } from '@/types/types/Day'
import { ResponseApi } from '@/types/types/ResponseApi'

export const calendarApi = createApi({
	reducerPath: 'calendarApi',
	tagTypes: ['day'],
	baseQuery: axiosBaseQuery('calendar'),
	endpoints(build) {
		return {
			getAll: build.query<ResponseApi<Day[]>, void>({
				query: () => ({ url: 'all', method: 'GET' }),
				providesTags: ['day'],
			}),

			getById: build.query<ResponseApi<Day>, string>({
				query: (dayId) => ({ url: `by-id/${dayId}`, method: 'GET' }),
				providesTags: ['day'],
			}),

			create: build.mutation<ResponseApi<Day>, AddedDayDto>({
				query: (dto) => ({
					url: 'added',
					method: 'POST',
					data: dto,
				}),
				invalidatesTags: ['day'],
			}),

			update: build.mutation<ResponseApi<Day>, UpdateDayDto>({
				query: ({ dayId, dto }) => ({
					url: `update/${dayId}`,
					method: 'PATCH',
					data: dto,
				}),
				invalidatesTags: ['day'],
			}),

			delete: build.mutation<ResponseApi, string>({
				query: (dayId) => ({
					url: `delete/${dayId}`,
					method: 'DELETE',
				}),
				invalidatesTags: ['day'],
			}),

			deleteAll: build.mutation<ResponseApi, void>({
				query: () => ({
					url: 'delete-all',
					method: 'DELETE',
				}),
				invalidatesTags: ['day'],
			}),
		}
	},
})

export const {
	useGetAllQuery,
	useGetByIdQuery,
	useCreateMutation,
	useUpdateMutation,
	useDeleteMutation,
	useDeleteAllMutation,
} = calendarApi
