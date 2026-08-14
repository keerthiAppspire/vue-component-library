<script setup>
import {ref,reactive} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import {BaseInput,BaseButton} from '@/components/ui'
import { useToast } from '@/composables/useToast';
const auth=useAuthStore()
const router=useRouter()
const route=useRoute()
const toast=useToast()
const form=reactive({email:'',password:''})
const isSubmitting=ref(false)
const errors=ref({})
async function submit(){
    errors.value={}
    isSubmitting.value=true
    try{
        await auth.login(form)
        toast.success(`welcome back,${auth.user.name}`)
        router.replace(route.query.redirect || '/dashboard')
    }
    catch(err){
        if (err.response?.status===422){
            errors.value=err.response.data.errors
        }
        else{
            toast.error(err.response.data?.message||'Login failed')
        }
    }
    finally{
            isSubmitting.value=false
        }
}
</script>
<template>
    <main class="login">
        <form @submint.prevent="submit">
            <h1>Sign in</h1>
            <BaseInput v-model="form.email" label="Email" type="email" :error=errors.email></BaseInput>
            <BaseInput v-model="form.password" label="Password" type="password" :error=errors.password></BaseInput>
            <BaseButton type="submit" :loading="isSubmitting">Sign in</BaseButton>
        </form>
    </main>
</template>
<style scoped>
.login { display: grid; place-items: center; min-height: 100vh; padding: 2rem; }
form { display: flex; flex-direction: column; gap: 1rem; min-width: 320px; }
</style>