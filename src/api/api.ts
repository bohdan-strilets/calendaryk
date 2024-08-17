import axios from 'axios'

export const API_URL = 'http://localhost:4400/api/'
const LOCAL_STORAGE_KEY = 'persist:auth'

const api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
})

api.interceptors.request.use((config) => {
	const dataForLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY)
	const authData: { token: string } | null = dataForLocalStorage
		? JSON.parse(dataForLocalStorage)
		: null

	if (authData?.token) {
		const parsedToken = authData.token.replace(/"/g, '')
		config.headers.Authorization = `Bearer ${parsedToken}`
	}

	return config
})

api.interceptors.response.use(
	(config) => config,
	async (error) => {
		const { response, config } = error

		if (response?.status === 401 && !config._isRetry) {
			config._isRetry = true

			try {
				const { data } = await api.get('auth/refresh-token')
				const dataToLocalStorage = {
					token: data.tokens.accessToken,
					_persist: '{"version":-1,"rehydrated":true}',
				}

				localStorage.setItem(
					LOCAL_STORAGE_KEY,
					JSON.stringify(dataToLocalStorage)
				)

				return api.request(config)
			} catch (error) {
				console.error('Refresh token request failed', error)
			}
		}

		return Promise.reject(error)
	}
)

export default api
