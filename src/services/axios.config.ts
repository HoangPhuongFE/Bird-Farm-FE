import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['permission'] = 'customer'

const axiosInstance = axios.create()

export { axiosInstance }
