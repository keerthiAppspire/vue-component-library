<script setup>  
import { ref } from 'vue'
// import BaseButton from './components/ui/BaseButton.vue'
// import BaseInput from './components/ui/BaseInput.vue'
import BaseToast from './components/ui/BaseToast.vue'
import { useToast } from './composables/useToast'
import { BaseButton, BaseInput} from'./components/ui'
const email = ref('')
const { success, error, info } = useToast()

</script>

<template>
<h3>BaseButton</h3>
<BaseButton>Primary Button</BaseButton>
<BaseButton variant="secondary">Secondary Button</BaseButton>
<BaseButton variant="danger">Delete</BaseButton>
<BaseButton size="lg" loading>Saving...</BaseButton>
<hr>
<h3>BaseInput</h3>
  <BaseInput
    v-model="email"
    label="Email"
    placeholder="Enter your email"
    hint="We'll never share your email."
  />
  <p>Email: {{ email }}</p>
  <BaseButton>
    Submit
  </BaseButton>
  <hr>
<h3>BaseToast + useToast</h3>
  <BaseButton @click="success('This is a success message!')">Show Success Toast</BaseButton>
  <BaseButton variant="secondary" @click="error('This is an error message!')">Show Error Toast</BaseButton>
  <BaseButton variant="danger" @click="info('This is an info message!')">Show Info Toast</BaseButton>
  <BaseToast />
  <hr>
<h3>Index Export:</h3>
 <BaseButton>Test Button</BaseButton>
 <BaseInput placeholder="Test input"/>

  
</template>
