import { Tokens } from '../types/Tokens'
import { User } from '../types/User'

export type AuthSliceState = {
	token: string | null
	isLoggedIn: boolean
	isRefreshing: boolean
	loading: boolean
}

export type SuccessReturns = {
	user: User
	tokens: Tokens
}
