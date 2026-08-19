<script setup>
import { Form } from 'vee-validate';
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod';
import BaseInput from '@/components/ui/BaseInput.vue';
import { BaseButton } from '@/components/ui';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { useToast } from '@/composables/useToast';

const auth=useAuthStore()
const toast=useToast()
const router=useRouter()
const schema=toTypedSchema(z.object({
    name:z.string().min(2,'Name too short').max(80),
    email:z.string().email('email is invalid'),
    password:z.string().min(8,'Password contain atleast 8 characters').regex(/[0-9]/,'Need a number'),
    confirm:z.string()
}).refine(d=>d.password===d.confirm,{
    message:'Passwords must match',
    path:['confirm']
}))
async function onSubmit(values,{setErrors}){
    try{
     await auth.register(values)
    toast.success('Account is created')
    router.replace('/dashboard')
    }
    catch(err){
        
        if(err.response?.status===422)
        setErrors(err.response.data.errors)
    else{
        toast.error('Registeration failed')
    }
}  
}
</script>
<template>
    <Form :validation-schema="schema" @submit="onSubmit" >
        <h1>Creaate your account</h1>
        <BaseInput name="name" label="Full Name"></BaseInput>
        <BaseInput name="email" label="Email" type="email"/>
        <BaseInput name="password" label="Password" type="password"/>
        <BaseInput name="confirm" label="confirm Password" type="password"/>
        <BaseButton type="submit">Create account</BaseButton>
    </Form>
</template>
<style scoped>
form {
  width: 350px;
  margin: 50px auto;
}
</style>