import { get } from '@/api/http.ts'

export const getKey = () => {
  return get('/api/login/qr/key')
}

export const getLoginStatus = () => {
  return '/api/login/status'
}
