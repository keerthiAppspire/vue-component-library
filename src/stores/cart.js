import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
export const useCartStore = defineStore('cart', () => {
  const auth = useAuthStore()
  function checkout() {
    if (!auth.isLoggedIn) {
      throw new Error('Login Required')
    }
    console.log('Checkout successful')
  }
  return {
    checkout
  }
})