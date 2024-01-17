import { api } from '@/lib/axios'

export interface IGetManagedRestaurant {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export const GetManagedRestaurant = async () => {
  const response = await api.get<IGetManagedRestaurant>('/managed-restaurant')

  return response.data
}
