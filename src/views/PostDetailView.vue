<script setup>
import { useRouter } from 'vue-router'

defineProps({ id: String })

const router = useRouter()
</script>

<template>
  <section>
    
    <h1>Post #{{ id }}</h1>
    <p>Full content here…</p>
    <button @click="router.back()"> Back</button>
  </section>
</template>