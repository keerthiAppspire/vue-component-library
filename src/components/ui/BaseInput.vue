<script setup>
import { useField } from 'vee-validate';
const props=defineProps({
  name:{type:String,required:true},
  label:      { type: String, default: '' },
  hint:       { type: String, default: '' },
  type:       { type: String, default: 'text' },
  placeholder:{ type: String, default: '' }
})
const {value,errorMessage,meta}=useField(()=>props.name)

</script>

<template>
  <label class="field">
    <span v-if="label">{{ label }}</span>
    <div class="input-wrap" :class="{ error:errorMessage }">
      <slot name="icon" ></slot>
      <input
      v-model="value"
        :type="type"
        :placeholder="placeholder" 
      />
    </div>
    <small v-if="meta.touched && errorMessage" class="msg error-msg">{{ errorMessage }}</small>
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