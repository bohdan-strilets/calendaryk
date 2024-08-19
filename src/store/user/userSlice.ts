import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserSliceState } from '@/types/redux/UserSliceState'
import { User } from '@/types/types/User'

import { setIsLoggedIn } from '../auth/authSlice'
import { sliceName } from './config'
import operations from './userOperations'

const initialState: UserSliceState = {
	user: null,
	loading: false,
}

const UserSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User | null | undefined>) {
			state.user = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(operations.getCurrentUser.pending, (state) => {
				state.loading = true
			})
			.addCase(operations.getCurrentUser.fulfilled, (state, action) => {
				state.user = action.payload.data
				state.loading = false
				setIsLoggedIn(true)
			})
			.addCase(operations.getCurrentUser.rejected, (state) => {
				state.loading = false
			})
	},
})

export const { setUser } = UserSlice.actions

export const userReducer = UserSlice.reducer
