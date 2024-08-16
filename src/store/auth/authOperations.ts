import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '@/api/api'
import { RegistrationDto } from '@/types/dto/RegistrationDto'
import { handleApiError } from '@/utils/functions/handleApiError'

import { endpoints, operationNames } from './config'

const registration = createAsyncThunk(
	operationNames.REGISTRATION,
	async (dto: RegistrationDto, { rejectWithValue }) => {
		try {
			const { data } = await api.post(endpoints.REGISTRATION, dto)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const operations = { registration }

export default operations
