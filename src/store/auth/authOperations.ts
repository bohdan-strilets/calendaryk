import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '@/api/api'
import { LoginDto } from '@/types/dto/LoginDto'
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

const login = createAsyncThunk(
	operationNames.LOGIN,
	async (dto: LoginDto, { rejectWithValue }) => {
		try {
			const { data } = await api.post(endpoints.LOGIN, dto)
			return data
		} catch (error) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const operations = { registration, login }

export default operations
