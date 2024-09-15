import { Gender } from '../enums/Gender'

export type ProfileEditFormFields = {
	firstName?: string
	lastName?: string
	dateBirth?: string
	gender?: Gender
}
