<script setup>
import { ref } from 'vue'
import { BaseButton, BaseInput, BaseToast } from '@/components/ui'
import { useToast } from '@/composables/useToast'

const showModal = ref(false)
const email = ref('')
const { success, error } = useToast()
</script>

<template>
  <div class="page">
    <h1>Component Library Demo</h1>

    <BaseCard>
      <template #header><h2>Buttons</h2></template>
      <BaseButton variant="primary">Primary</BaseButton>
      <BaseButton variant="secondary">Secondary</BaseButton>
      <BaseButton variant="danger">Danger</BaseButton>
      <BaseButton variant="ghost">Ghost</BaseButton>
      <BaseButton loading>Loading</BaseButton>
    </BaseCard>

    <BaseCard>
      <template #header><h2>Form</h2></template>
      <BaseInput v-model="email" label="Email" placeholder="you@example.com" />
      <BaseButton @click="success('Form submitted!')">Submit</BaseButton>
      <BaseButton variant="danger" @click="error('Something failed.')">Trigger error</BaseButton>
    </BaseCard>

    <BaseCard>
      <template #header><h2>Modal</h2></template>
      <BaseButton @click="showModal = true">Open modal</BaseButton>
      <BaseModal v-model="showModal" title="Edit Profile">
        <p>Modal content here</p>
      </BaseModal>
    </BaseCard>

    <BaseToast />
  </div>
</template>

<style scoped>
.page { max-width: 720px; margin: 2rem auto; padding: 0 1rem; display: grid; gap: 1.5rem; }
</style>
