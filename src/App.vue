<script setup>
import { ref } from 'vue'
import { BaseSelect } from '@/components/ui'

const country = ref('')
const role = ref('')
</script>

<template>
  <div class="page">
    <h1>BaseSelect Demo</h1>

    <BaseSelect
      v-model="country"
      label="Country"
      :options="['India', 'Germany', 'USA','Afrrica', 'Australia']"
    />

    <p>Selected Country: {{ country }}</p>

    <BaseSelect
      v-model="role" 
      label="Role"
      :options="[
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'guest', label: 'Guest' }
      ]"
    />
    <p>Selected Role: {{ role }}</p>
  </div>
</template>
<style scoped> 
  .page { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; margin: 2rem auto; }
</style>

