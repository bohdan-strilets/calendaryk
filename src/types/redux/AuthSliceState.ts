export type AuthSliceState = {
	token: string | null | undefined
	isLoggedIn: boolean
	isRefreshing: boolean
	loading: boolean
}
