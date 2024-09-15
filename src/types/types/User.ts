import { Gender } from '../enums/Gender'

export type User = {
	_id: string
	firstName: string
	lastName: string
	dateBirth: string
	email: string
	gender: Gender
	avatarUrls: string[]
	isActivated: boolean
	createdAt: Date
	updatedAt: Date
}
