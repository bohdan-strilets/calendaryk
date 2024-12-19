import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '@/api/api'

import { handleApiError } from '@/utils/functions/handleApiError'

import { ChangePasswordDto } from '@/types/dto/ChangePasswordDto'
import { ChangeProfileDto } from '@/types/dto/ChangeProfileDto'
import { EmailDto } from '@/types/dto/EmailDto'
import { ResetPasswordDto } from '@/types/dto/ResetPasswordDto'
import { ResponseApi } from '@/types/types/ResponseApi'
import { User } from '@/types/types/User'

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

const resetPassword = createAsyncThunk<ResponseApi, ResetPasswordDto>(
	operationNames.RESET_PASSWORD,
	async (dto, { rejectWithValue }) => {
		try {
			const { data } = await api.post(endpoints.RESET_PASSWORD, dto)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const changeProfile = createAsyncThunk<ResponseApi<User>, ChangeProfileDto>(
	operationNames.CHANGE_PROFILE,
	async (dto, { rejectWithValue }) => {
		try {
			const { data } = await api.patch(endpoints.CHANGE_PROFILE, dto)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const changeEmail = createAsyncThunk<ResponseApi<User>, EmailDto>(
	operationNames.CHANGE_EMAIL,
	async (dto, { rejectWithValue }) => {
		try {
			const { data } = await api.patch(endpoints.CHANGE_EMAIL, dto)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const changePassword = createAsyncThunk<ResponseApi, ChangePasswordDto>(
	operationNames.CHANGE_PASSWORD,
	async (dto, { rejectWithValue }) => {
		try {
			const { data } = await api.patch(endpoints.CHANGE_PASSWORD, dto)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const uploadAvatar = createAsyncThunk<ResponseApi<User>, FormData>(
	operationNames.UPLOAD_AVATAR,
	async (dto, { rejectWithValue }) => {
		try {
			const { data } = await api.post(endpoints.UPLOAD_AVATAR, dto)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const deleteAvatar = createAsyncThunk<ResponseApi<User>, string>(
	operationNames.DELETE_AVATAR,
	async (avatarPublicId, { rejectWithValue }) => {
		try {
			const { data } = await api.delete(
				`${endpoints.DELETE_AVATAR}?avatarPublicId=${avatarPublicId}`
			)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const selectAvatar = createAsyncThunk<ResponseApi<User>, string>(
	operationNames.SELECT_AVATAR,
	async (avatarPublicId, { rejectWithValue }) => {
		try {
			const { data } = await api.patch(
				`${endpoints.SELECT_AVATAR}?avatarPublicId=${avatarPublicId}`
			)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const deleteProfile = createAsyncThunk<ResponseApi>(
	operationNames.DELETE_PROFILE,
	async (_, { rejectWithValue, dispatch }) => {
		try {
			const { data } = await api.delete(endpoints.DELETE_PROFILE)
			dispatch(setIsLoggedIn(false))
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
	resetPassword,
	changeProfile,
	changeEmail,
	changePassword,
	uploadAvatar,
	deleteAvatar,
	selectAvatar,
	deleteProfile,
}

export default operations
