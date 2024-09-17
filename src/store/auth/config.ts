export const sliceName = 'auth'

export const operationNames = {
	REGISTRATION: `${sliceName}/registration`,
	LOGIN: `${sliceName}/login`,
}

export const endpoints = {
	REGISTRATION: operationNames.REGISTRATION,
	LOGIN: operationNames.LOGIN,
}
