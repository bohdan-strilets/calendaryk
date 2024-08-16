import { RootState } from '../store'

export const getToken = (state: RootState) => state.auth.token
export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const getIsRefreshing = (state: RootState) => state.auth.isRefreshing
export const getLoading = (state: RootState) => state.auth.loading
