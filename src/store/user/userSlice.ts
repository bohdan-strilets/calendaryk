import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserSliceState } from '@/types/redux/UserSliceState'
import { User } from '@/types/types/User'

import { sliceName } from './config'

const initialState: UserSliceState = {
	user: null,
	loading: false,
}

const UserSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User | null>) {
			state.user = action.payload
		},
	},
	extraReducers: () => {},
})

export const { setUser } = UserSlice.actions

export const userReducer = UserSlice.reducer
