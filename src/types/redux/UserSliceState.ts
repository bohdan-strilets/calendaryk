import { User } from '../types/User'

export type UserSliceState = {
	user: User | null
	loading: boolean
}
