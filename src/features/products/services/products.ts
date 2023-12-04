import { axiosInstance } from 'services/axios.config'

export const getProducts = async (skip?: number, take?: number) => {
  const res = await axiosInstance.get(`bird?skip=${skip}&take=${take}`)
  return res.data
}

export const getProductById = async (id?: string) => {
  const res = await axiosInstance.get(`bird/${id}`)
  return res.data
}
