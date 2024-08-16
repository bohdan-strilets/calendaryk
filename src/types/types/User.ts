import { Gender } from '../enums/Gender'
import { Location } from './Location'

export type User = {
	_id: string
	firstName: string
	lastName: string
	nickname: string
	dateBirth: Date
	location: Location
	phoneNumber: string
	email: string
	gender: Gender
	description: string
	avatarUrls: string[]
	posterUrls: string[]
	isActivated: boolean
	createdAt: Date
	updatedAt: Date
}
