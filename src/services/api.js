import axios from 'axios'
import { useAuthStore } from '@/stores/auth'  
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL})

// Request interceptor — attach token
api.interceptors.request.use((config)=>{
  const auth=useAuthStore()
  if(auth.token) config.headers.Authorization=`Bearer ${auth.token}`
  return config
})
// Response interceptor — handle errors
api.interceptors.response.use(
    (res)=>res,
    (err)=>{
      const auth=useAuthStore()
      if(err.response?.status===401 && auth.isLoggedIn) auth.logout()
        return Promise.reject(err)
    }
  ) 

export default api