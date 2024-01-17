import { api } from '@/lib/axios'

export interface ISignInBody {
  email: string
}

export const signIn = async ({ email }: ISignInBody) => {
  await api.post('/authenticate', { email })
}
