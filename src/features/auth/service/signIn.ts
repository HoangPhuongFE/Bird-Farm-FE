import { axiosInstance } from 'services/axios.config'

export const signIn = async (user: IFormLogin) => {
  const res = await axiosInstance.post('/auth/login', user, {
    headers: {
      permission: 'customer',
      'Content-Type': 'application/json'
    }
  })
  return res.data
}
