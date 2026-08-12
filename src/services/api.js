import axios from 'axios'
import { useUiStore } from '@/stores/ui'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

// Request interceptor — attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  useUiStore().pendingRequests++
  return config
})

// Response interceptor — handle errors
api.interceptors.response.use(
  (response) => {
    useUiStore().pendingRequests--
     return response
  },
  (error) => {
    useUiStore().pendingRequests--
    if (error.response?.status === 401) {
      // token expired
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api