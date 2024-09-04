import { RootState } from '../store'

export const getUser = (state: RootState) => state.user.user
export const getLoading = (state: RootState) => state.user.loading
