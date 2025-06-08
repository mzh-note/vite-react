import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import useStore from '@/store/useStore.ts'

const https: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 60000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
})

// 请求拦截器：自动注入 Token
https.interceptors.request.use((config) => {
  const { token } = useStore.getState() // Zustand 的非 Hook 方式获取状态
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

https.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response
    } else {
      return Promise.reject(new Error(response?.statusText))
    }
  },
  (error) => {
    // 异常处理
    // if (error.response?.status === 403 || error.response?.status === 401) {
    //
    // }
    return Promise.reject(error)
  }
)

export default https

export const get = <T>(url: string, params?: object, config?: AxiosRequestConfig) => {
  return https<T>({ ...config, method: 'GET', url, params })
}

export const post = <T>(url: string, data?: object, config?: AxiosRequestConfig) => {
  return https<T>({ ...config, method: 'POST', url, data })
}

export const put = <T>(url: string, data?: object, config?: AxiosRequestConfig) => {
  return https<T>({ ...config, method: 'PUT', url, data })
}

export const del = <T>(url: string, params?: object, config?: AxiosRequestConfig) => {
  return https<T>({ ...config, method: 'DELETE', url, params })
}
