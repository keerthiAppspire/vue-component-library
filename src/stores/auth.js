import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/services/api'
import router from '@/router'
export const useAuthStore = defineStore('auth', () => {
  const user=ref(null)
  const token = ref(localStorage.getItem('token'))

  const isLoggedIn = computed(() => !!token.value)
  const isAdmin=computed(()=> user.value?.role==='admin')
  async function login({ email, password }) {
    const { data } = await api.post('/login', { email, password })
    setSession({
      token: data.accessToken,
      user: data.user
    })
  }
  async function register(payload) {
  const { data } = await api.post('/register', payload)

  setSession({
    token: data.accessToken,
    user: data.user
  })
}

  function setSession({token:t,user:u}){
    token.value=t
    user.value=u
    localStorage.setItem('token',t)
  }
  function logout(){
    token.value=null
    user.value=null
    localStorage.removeItem('token')
    router.replace({name:'login'})
  }
  return { user, token, isLoggedIn, isAdmin, login, register,logout }
},
  {
    persist:{paths:['user']}
  })