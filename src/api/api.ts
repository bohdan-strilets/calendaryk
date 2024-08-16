import axios from 'axios'

export const API_URL = 'http://localhost:4400/api/'

const api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
})

export default api
