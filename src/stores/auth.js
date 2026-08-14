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
    const { data } = await api.post('/auth/login', { email, password })
    setSession(data)
  }
  // async function register(payload) {
  //   const {data}=awit api.post('/auth/register',payload)   
  //   setSession(data)
  // }

  // async function me() {
  //   if(!token.value) return
  //   try{
  //     const {data}=await api.get('/auth/me')
  //     user.value=data
  //   }
  //   catch{
  //     logout()
  //   }
  // }
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
  return{user,token,isLoggedIn,isAdmin,login,logout}
},
  {
    persist:{paths:['user']}
  })