import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistStore,
} from 'redux-persist'

import { authReducer } from './auth/authSlice'
import { calendarApi } from './calendars/calendarApi'
import { companyApi } from './companies/companyApi'
import { userReducer } from './user/userSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		[companyApi.reducerPath]: companyApi.reducer,
		[calendarApi.reducerPath]: calendarApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.concat(companyApi.middleware)
			.concat(calendarApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
