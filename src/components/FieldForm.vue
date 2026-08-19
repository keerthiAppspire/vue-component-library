<script setup>
import BaseInput from './ui/BaseInput.vue'; 
import { Form } from 'vee-validate';
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

const schema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password:z.string().min(8,'Password must be at least 8 characters')
  }),
);

function onSubmit(values) {
  console.log('Valid form:', values);
}
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit" v-slot="{isSubmitting}">
    <BaseInput name="email" label="Email" type="email"/>
    <BaseInput name="password" label="Password" type="password"/>
    <button :disabled="isSubmitting">Sign in</button>
  </Form>
</template>
<style scoped>
form {
  width: 350px;
  margin: 50px auto;
}

label {
  display: block;
  margin-bottom: 10px;
}
</style>
