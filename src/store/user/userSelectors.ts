import { RootState } from '../store'

export const getUser = (state: RootState) => state.user.user
export const getLoading = (state: RootState) => state.user.loading
export const getEmail = (state: RootState) => state.user.user?.email
export const getAvatars = (state: RootState) => state.user.user?.avatarUrls
