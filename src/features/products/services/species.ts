import { axiosInstance } from 'services/axios.config'

export const getSpeciesById = async (id?: number) => {
  const res = await axiosInstance.get(`/species/${id}`)
  return res.data
}
