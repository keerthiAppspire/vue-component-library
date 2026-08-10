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

  <button @click="handleCheckout">
    Checkout
  </button>

  <p>{{ message }}</p>
</template>
