import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { AuthSliceState } from '@/types/redux/AuthSliceState'

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
		setIsLoggedIn(state, action: PayloadAction<boolean>) {
			state.isLoggedIn = action.payload
		},
		setIsRefreshing(state, action: PayloadAction<boolean>) {
			state.isRefreshing = action.payload
		},
		logout(state) {
			state.token = null
			state.isLoggedIn = false
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(operations.registration.pending, (state) => {
				state.loading = true
			})
			.addCase(operations.registration.fulfilled, (state, action) => {
				const token = action.payload?.data?.tokens.accessToken

				state.token = token
				state.isLoggedIn = true
				state.loading = false
			})
			.addCase(operations.registration.rejected, (state) => {
				state.loading = false
			})
			.addCase(operations.login.pending, (state) => {
				state.loading = true
			})
			.addCase(operations.login.fulfilled, (state, action) => {
				const token = action.payload?.data?.tokens.accessToken

				state.token = token
				state.isLoggedIn = true
				state.loading = false
			})
			.addCase(operations.login.rejected, (state) => {
				state.loading = false
			})
	},
})

export const { setIsLoggedIn, setIsRefreshing, logout } = AuthSlice.actions

export const authReducer = persistReducer(persistConfig, AuthSlice.reducer)
