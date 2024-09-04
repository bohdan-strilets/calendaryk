import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '@/api/api'
import { EmailDto } from '@/types/dto/EmailDto'
import { ResponseApi } from '@/types/types/ResponseApi'
import { User } from '@/types/types/User'
import { handleApiError } from '@/utils/functions/handleApiError'

import { setIsLoggedIn } from '../auth/authSlice'
import { endpoints, operationNames } from './config'

const getCurrentUser = createAsyncThunk<ResponseApi<User>>(
	operationNames.CURRENT_USER,
	async (_, { rejectWithValue, dispatch }) => {
		try {
			const { data } = await api.get(endpoints.CURRENT_USER)
			dispatch(setIsLoggedIn(true))
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const requestRepeatActivation = createAsyncThunk<ResponseApi, EmailDto>(
	operationNames.REQUEST_REPEAT_ACTIVATION,
	async (dto, { rejectWithValue }) => {
		try {
			const { data } = await api.post(endpoints.REQUEST_REPEAT_ACTIVATION, dto)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const requestResetPassword = createAsyncThunk<ResponseApi, EmailDto>(
	operationNames.REQUEST_RESET_PASSWORD,
	async (dto, { rejectWithValue }) => {
		try {
			const { data } = await api.post(endpoints.REQUEST_RESET_PASSWORD, dto)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const operations = {
	getCurrentUser,
	requestRepeatActivation,
	requestResetPassword,
}

export default operations
