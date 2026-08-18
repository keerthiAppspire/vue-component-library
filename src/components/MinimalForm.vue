<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
const schema=toTypedSchema(z.object({
    email:z.string().email('Enter a valid email'),
    password:z.string().min(8,'At least 8 characters')
}))
const {handleSubmit,errors,defineField,isSubmitting}=useForm({
    validationSchema:schema
})
const [email,emailAttrs]=defineField('email')
const [password,passwordAttrs]=defineField('password')
const onSubmit=handleSubmit(async(values)=>{
    console.log('valid form:',values)
})
</script>
<template>
    <form @submit="onSubmit">
        <label> Email
            <input v-model="email" v-bind="emailAttrs"/>
            <small v-if="errors.email">{{errors.email }}</small>
        </label>
        <label>Password
            <input v-model="password" v-bind="passwordAttrs" type="password"/>
            <small v-if="errors.password">{{ errors.password }}</small>
        </label>
        <button :disabled="isSubmitting" type="submit">Sign in</button>
    </form>
</template>
<style scoped>

label {
  display: block;
  margin-bottom: 20px;
  font-weight: 600;
}
small{
    display: block;
    color: red;
}

</style>