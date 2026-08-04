<script setup>
defineProps({
  variant: { type: String, default: 'primary', validator: v => ['primary','secondary','danger','ghost'].includes(v) },
  size:    { type: String, default: 'md', validator: v => ['sm','md','lg'].includes(v) },
  loading: { type: Boolean, default: false },
  disabled:{ type: Boolean, default: false },
  type:    { type: String, default: 'button' }
})
defineEmits(['click'])
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="['btn', `btn-${variant}`, `btn-${size}`, { 'is-loading': loading }]"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="spinner" />
    <slot />
  </button>
</template>

<style scoped>
.btn { border: 0; cursor: pointer; font-weight: 600; border-radius: var(--radius); transition: .15s; display: inline-flex; align-items: center; gap: .5rem; }
.btn:disabled { opacity: .5; cursor: not-allowed; }
.btn-sm { padding: .25rem .75rem; font-size: .875rem; }
.btn-md { padding: .5rem 1rem; font-size: 1rem; }
.btn-lg { padding: .75rem 1.5rem; font-size: 1.125rem; }
.btn-primary { background: var(--color-primary); color: white; }
.btn-primary:hover:not(:disabled) { background: var(--color-primary-hover); }
.btn-secondary { background: var(--color-secondary); color: white; }
.btn-danger { background: var(--color-danger); color: white; }
.btn-ghost { background: transparent; color: var(--color-text); }
.btn-ghost:hover:not(:disabled) { background: #f3f4f6; }
.spinner { width: 14px; height: 14px; border: 2px solid currentColor; border-right-color: transparent; border-radius: 50%; animation: spin .6s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>