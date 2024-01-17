import { api } from '@/lib/axios'

export interface IGetProfile {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export const getProfile = async () => {
  const response = await api.get<IGetProfile>('/me')

  return response.data
}
