<script setup>
import { useAuthStore } from './stores/auth'
import { useCartStore } from './stores/cart'
import { storeToRefs } from 'pinia'

const auth = useAuthStore()
const cart = useCartStore()

const { items, totalCount, totalPrice } = storeToRefs(cart)
</script>

<template>
  <h1>Auth + Cart</h1>

  <h2>Authentication</h2>

  <p>Logged in: {{ auth.isLoggedIn }}</p>
  <p>User: {{ auth.user?.name || 'Not logged in' }}</p>
  <p>Admin: {{ auth.isAdmin }}</p>

  <button @click="auth.login">Login</button>
  <button @click="auth.logout">Logout</button>

  <hr>

  <h2>Cart</h2>

  <p>Items: {{ totalCount }}</p>
  <p>Total: ${{ totalPrice.toFixed(2) }}</p>
    

  <button
    @click="cart.add({ id: 1, name: 'Laptop', price: 50000 })"
  >
    Add Laptop
  </button>

  <button
    @click="cart.add({ id: 2, name: 'Mouse', price: 200 })"
  >
    Add Mouse
  </button>

  <button @click="cart.clear">
    Clear Cart
  </button>
  
  
  <h3 v-if="items.length > 0">Products</h3>
    <p>Add products</p>


  <ul v-if="items.length > 0">
    <li v-for="item in items" :key="item.id">
      {{ item.name }} — ${{ item.price }} × {{ item.qty }}

      <button @click="cart.remove(item.id)">
        Remove
      </button>
    </li>
  </ul>
  
</template>