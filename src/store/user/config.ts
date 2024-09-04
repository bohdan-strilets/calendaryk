export const sliceName = 'user'

export const operationNames = {
	CURRENT_USER: `${sliceName}/current-user`,
	REQUEST_REPEAT_ACTIVATION: `${sliceName}/request-repeat-activation-email`,
	REQUEST_RESET_PASSWORD: `${sliceName}/request-reset-password`,
}

export const endpoints = {
	CURRENT_USER: `${operationNames.CURRENT_USER}`,
	REQUEST_REPEAT_ACTIVATION: `${operationNames.REQUEST_REPEAT_ACTIVATION}`,
	REQUEST_RESET_PASSWORD: `${operationNames.REQUEST_RESET_PASSWORD}`,
}
