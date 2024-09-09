import { Gender } from '../enums/Gender'

export type ChangedProfileFormInputs = {
	firstName?: string
	lastName?: string
	dateBirth?: Date
	gender?: Gender
}
