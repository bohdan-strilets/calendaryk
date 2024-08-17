import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthSliceState, SuccessReturns } from '@/types/redux/AuthSliceState'

import { setUser } from '../user/userSlice'
import operations from './authOperations'
import { sliceName } from './config'

const initialState: AuthSliceState = {
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	loading: false,
}

export const AuthSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(operations.registration.pending, (state) => {
				state.loading = true
			})
			.addCase(
				operations.registration.fulfilled,
				(state, action: PayloadAction<SuccessReturns>) => {
					state.token = action.payload?.tokens.accessToken
					state.isLoggedIn = true
					state.loading = false
					setUser(action.payload.user)
				}
			)
			.addCase(operations.registration.rejected, (state) => {
				state.loading = false
			})
			.addCase(operations.login.pending, (state) => {
				state.loading = true
			})
			.addCase(
				operations.login.fulfilled,
				(state, action: PayloadAction<SuccessReturns>) => {
					state.token = action.payload?.tokens.accessToken
					state.isLoggedIn = true
					state.loading = false
					setUser(action.payload.user)
				}
			)
			.addCase(operations.login.rejected, (state) => {
				state.loading = false
			})
	},
})

export const authReducer = AuthSlice.reducer
