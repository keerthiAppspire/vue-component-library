<script setup>
defineProps({
  modelValue: { type: [Boolean, Array], default: false },
  value: { type: [String, Number, Boolean], default: null },   // for array binding
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  indeterminate: { type: Boolean, default: false }
})
defineEmits(['update:modelValue'])

function isChecked(modelValue, value) {
  if (Array.isArray(modelValue)) return modelValue.includes(value)
  return !!modelValue
}

function onChange(e, modelValue, value) {
  if (Array.isArray(modelValue)) {
    const next = [...modelValue]
    if (e.target.checked) next.push(value)
    else next.splice(next.indexOf(value), 1)
    return next
  }
  return e.target.checked
}
</script>
<template>
    <label class="checkbox">
    <input 
        type="checkbox"
        :checked="isChecked(modelValue, value)"
        :disabled="disabled"
        :indeterminate="indeterminate"
        @change="$emit('update:modelValue', onChange($event, modelValue, value))"/>
        <span> {{ label }}</span>
        </label>
</template>
