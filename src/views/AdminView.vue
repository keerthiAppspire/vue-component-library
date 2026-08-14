<script setup>
import { useCan } from '@/composables/useCan'
const can = useCan()
</script>
<template>
  <section>
    <h1>Admin Panel</h1>
    <p>Admin only page.</p>
    <button v-if="can('delete-user')">Delete user</button>
  </section>
</template>