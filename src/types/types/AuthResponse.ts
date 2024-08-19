import { Tokens } from './Tokens'
import { User } from './User'

export type AuthResponse = {
	user: User
	tokens: Tokens
}
