<script setup>
defineProps({
  modelValue: { type: [String, Number], default: '' },
  label:      { type: String, default: '' },
  error:      { type: String, default: '' },
  hint:       { type: String, default: '' },
  type:       { type: String, default: 'text' },
  placeholder:{ type: String, default: '' }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="field">
    <span v-if="label">{{ label }}</span>
    <div class="input-wrap" :class="{ error }">
      <slot name="icon" />
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <small v-if="error" class="msg error-msg">{{ error }}</small>
    <small v-else-if="hint" class="msg">{{ hint }}</small>
  </label>
</template>

<style scoped>
.field { display: flex; flex-direction: column; gap: .25rem; }
.field span { font-size: .875rem; font-weight: 500; }
.input-wrap { display: flex; align-items: center; padding: .5rem .75rem; border: 1px solid var(--color-border); border-radius: var(--radius); background: white; }
.input-wrap.error { border-color: var(--color-danger); }
input { border: 0; outline: 0; flex: 1; font-size: 1rem; background: transparent; }
.msg { font-size: .75rem; color: var(--color-muted); }
.error-msg { color: var(--color-danger); }
</style>