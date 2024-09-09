import { Gender } from '../enums/Gender'

export type ChangeProfileDto = {
	firstName?: string
	lastName?: string
	dateBirth?: Date
	gender?: Gender
}
