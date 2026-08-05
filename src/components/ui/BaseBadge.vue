<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: v => ['default', 'primary', 'success', 'warning', 'danger', 'info'].includes(v)
  },
  size: { type: String, default: 'md', validator: v => ['sm', 'md', 'lg'].includes(v) },
  pill: { type: Boolean, default: false }
})
</script>

<template>
  <span :class="['badge', `badge-${variant}`, `badge-${size}`, { pill }]">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex; align-items: center;
  padding: .15rem .5rem; border-radius: 6px;
  font-size: .75rem; font-weight: 500;
  background: #e5e7eb; color: #374151;
}
.badge.pill { border-radius: 999px; }
.badge-sm { padding: .1rem .35rem; font-size: .7rem; }
.badge-md { padding: .15rem .5rem; font-size: .75rem; }
.badge-lg { padding: .25rem .75rem; font-size: .875rem; }
.badge-primary { background: #e0e7ff; color: #3730a3; }
.badge-success { background: #d1fae5; color: #065f46; }
.badge-warning { background: #fef3c7; color: #92400e; }
.badge-danger  { background: #fee2e2; color: #991b1b; }
.badge-info    { background: #dbeafe; color: #1e40af; }
</style>
