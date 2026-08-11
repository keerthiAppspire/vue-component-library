import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const isLoggedIn = computed(() => !!token.value)
  function login() { 
    token.value = '12345' 
  } 
 
  function logout() { 
    token.value = null 
  }
  return {
    token,
    isLoggedIn,
    login,
    logout
  }
},{
    persist:true
  }
)