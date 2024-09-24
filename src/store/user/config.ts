export const sliceName = 'user'

export const operationNames = {
	CURRENT_USER: `${sliceName}/current-user`,
	REQUEST_REPEAT_ACTIVATION: `${sliceName}/request-repeat-activation-email`,
	REQUEST_RESET_PASSWORD: `${sliceName}/request-reset-password`,
	RESET_PASSWORD: `${sliceName}/reset-password`,
	CHANGE_PROFILE: `${sliceName}/change-profile`,
	CHANGE_EMAIL: `${sliceName}/change-email`,
	CHANGE_PASSWORD: `${sliceName}/change-password`,
	UPLOAD_AVATAR: `${sliceName}/upload-avatar`,
	DELETE_AVATAR: `${sliceName}/delete-avatar`,
	SELECT_AVATAR: `${sliceName}/select-avatar`,
	DELETE_PROFILE: `${sliceName}/delete-profile`,
}

export const endpoints = {
	CURRENT_USER: operationNames.CURRENT_USER,
	REQUEST_REPEAT_ACTIVATION: operationNames.REQUEST_REPEAT_ACTIVATION,
	REQUEST_RESET_PASSWORD: operationNames.REQUEST_RESET_PASSWORD,
	RESET_PASSWORD: operationNames.RESET_PASSWORD,
	CHANGE_PROFILE: operationNames.CHANGE_PROFILE,
	CHANGE_EMAIL: operationNames.CHANGE_EMAIL,
	CHANGE_PASSWORD: operationNames.CHANGE_PASSWORD,
	UPLOAD_AVATAR: operationNames.UPLOAD_AVATAR,
	DELETE_AVATAR: operationNames.DELETE_AVATAR,
	SELECT_AVATAR: operationNames.SELECT_AVATAR,
	DELETE_PROFILE: operationNames.DELETE_PROFILE,
}
