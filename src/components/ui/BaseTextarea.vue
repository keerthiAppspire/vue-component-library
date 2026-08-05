<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  label: String,
  error: String,
  rows: { type: Number, default: 4 },
  placeholder: String
})
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="field">
    <span v-if="label">{{ label }}</span>
    <textarea
      :value="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      :class="{ error }"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <small v-if="error" class="error-msg">{{ error }}</small>
  </label>
</template>

<style scoped>
.field { display: flex; flex-direction: column; gap: .25rem; }
.field span { font-size: .875rem; font-weight: 500; }
textarea {
  padding: .5rem .75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font: inherit; resize: vertical;
}
textarea.error { border-color: var(--color-danger); }
.error-msg { color: var(--color-danger); font-size: .75rem; }
</style>