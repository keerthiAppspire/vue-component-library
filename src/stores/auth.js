import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useAuthStore = defineStore('auth', () => {
  const user=ref(null)
  const token = ref(null)

  const isLoggedIn = computed(() => !!token.value)
  const isAdmin=computed(()=> user.value?.role==='admin')
 function login() {
  token.value = '12345'

  user.value = {
    name: 'Kerthi',
    role: 'admin'
  }
}
 
  function logout() { 
    user.value=null
    token.value = null 
  }
  return {user,token,isLoggedIn,isAdmin,login,logout}
},{
    persist:true
  }
)