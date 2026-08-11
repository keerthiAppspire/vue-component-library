<script setup>
import { ref } from 'vue'
import { useAuthStore } from './stores/auth'
import { useCartStore } from './stores/cart'

const auth = useAuthStore()
const cart = useCartStore()
const message = ref('')
function handleCheckout() {
  try {
    cart.checkout()
    message.value = 'Checkout successful'
  } catch (error) {
    message.value = error.message
  }
}
</script>
<template>
  <h1>Multiple Stores</h1>
  <p>Logged in: {{ auth.isLoggedIn }}</p>
  <div class="buttons">
      <button @click="auth.login">Login</button>
      <button @click="auth.logout">Logout</button>
      <button @click="handleCheckout">Checkout</button>
  </div>
  <p>{{ message }}</p>
</template>
<style scoped>
.buttons{
  display:flex;
    gap : 5px;
}
</style>
