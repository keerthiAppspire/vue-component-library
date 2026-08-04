<script setup>
import { useToast } from '@/composables/useToast'
const { toasts, dismiss } = useToast()
</script>

<template>
  <Teleport to="body">
    <TransitionGroup tag="div" name="toast" class="toast-stack">
      <article v-for="t in toasts" :key="t.id" :class="['toast', `toast-${t.type}`]">
        <span>{{ t.message }}</span>
        <button @click="dismiss(t.id)">×</button>
      </article>
    </TransitionGroup>
  </Teleport>
</template>

<style scoped>
.toast-stack { position: fixed; top: 1rem; right: 1rem; display: flex; flex-direction: column; gap: .5rem; z-index: 1000; }
.toast { display: flex; gap: 1rem; align-items: center; padding: .75rem 1rem; border-radius: var(--radius); background: white; box-shadow: var(--shadow); min-width: 280px; }
.toast-success { border-left: 4px solid var(--color-success); }
.toast-error   { border-left: 4px solid var(--color-danger); }
.toast-info    { border-left: 4px solid var(--color-primary); }
button { background: none; border: 0; cursor: pointer; font-size: 1.2rem; }
.toast-enter-active, .toast-leave-active { transition: all .25s; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateX(20px); }
</style>