<script setup>
defineProps({
  modelValue: { type: [String, Number, null], default: '' },
  options: { type: Array, required: true },     
  label: { type: String, default: '' },
  placeholder: { type: String, default: 'Select an option' },
  error: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
})
defineEmits(['update:modelValue'])

function normalize(opt) {
  return typeof opt === 'object' ? opt : { value: opt, label: opt }
}
</script>

<template>
  <label class="field">
    <span v-if="label">{{ label }}</span>
    <div class="select-wrap" :class="{ error }">
      <select
        :value="modelValue"
        :disabled="disabled"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option disabled value="">{{ placeholder }}</option>
        <option
          v-for="opt in options"
          :key="normalize(opt).value"
          :value="normalize(opt).value"
        >
          {{ normalize(opt).label }}
        </option>
      </select>
    </div>
    <small v-if="error" class="error-msg">{{ error }}</small>
  </label>
</template>

<style scoped>
.field { display: flex; flex-direction: column; gap: .25rem; }
.field span { font-size: .875rem; font-weight: 500; }
.select-wrap { position: relative; border: 1px solid var(--color-border); border-radius: var(--radius); background: white; }
.select-wrap.error { border-color: var(--color-danger); }
select {
  width: 100%; padding: .5rem .75rem; border: 0; outline: 0;
  font-size: 1rem; background: transparent; appearance: none;
}
.select-wrap::after {
  content: '▾'; position: absolute; right: .75rem; top: 50%;
  transform: translateY(-50%); pointer-events: none; color: var(--color-muted);
}
.error-msg { color: var(--color-danger); font-size: .75rem; }
</style>

