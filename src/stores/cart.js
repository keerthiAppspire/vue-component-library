import { defineStore } from 'pinia'
import {ref, computed } from 'vue'

export const useCartStore=defineStore('cart',()=>{
  const items=ref([])
  const totalCount=computed(()=>items.value.reduce((n,i)=>n+i.qty,0))
const totalPrice = computed(() => items.value.reduce((n, i) => n + i.price * i.qty, 0))

  function add(product) {
  const existing = items.value.find(i => i.id === product.id)
    if(existing) {
      existing.qty++
    }
    else{
        items.value.push({ ...product, qty: 1 })
    } 
  }

  function remove(id) {
    items.value = items.value.filter(i => i.id !== id)
  }

  function clear() {
    items.value = []
  }

  return { items, totalCount, totalPrice, add, remove, clear }
}, { persist: true })