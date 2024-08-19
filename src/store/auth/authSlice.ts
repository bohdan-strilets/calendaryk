import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { AuthSliceState } from '@/types/redux/AuthSliceState'

import { setUser } from '../user/userSlice'
import operations from './authOperations'
import { sliceName } from './config'
const initialState: AuthSliceState = {
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	loading: false,
}

const persistConfig = {
	key: sliceName,
	storage,
	whitelist: ['token'],
}

export const AuthSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setIsLoggedIn(state, action) {
			state.isLoggedIn = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(operations.registration.pending, (state) => {
				state.loading = true
			})
			.addCase(operations.registration.fulfilled, (state, action) => {
				const token = action.payload?.data?.tokens.accessToken
				const user = action.payload.data?.user

				state.token = token
				state.isLoggedIn = true
				state.loading = false
				setUser(user)
			})
			.addCase(operations.registration.rejected, (state) => {
				state.loading = false
			})
			.addCase(operations.login.pending, (state) => {
				state.loading = true
			})
			.addCase(operations.login.fulfilled, (state, action) => {
				const token = action.payload?.data?.tokens.accessToken
				const user = action.payload.data?.user

				state.token = token
				state.isLoggedIn = true
				state.loading = false
				setUser(user)
			})
			.addCase(operations.login.rejected, (state) => {
				state.loading = false
			})
	},
})

export const { setIsLoggedIn } = AuthSlice.actions

export const authReducer = persistReducer(persistConfig, AuthSlice.reducer)
