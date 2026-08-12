import {defineStore} from 'pinia'
import {ref} from 'vue'
import {usersApi} from '@/services/users.js'
export const useUsersStore=defineStore('users',()=>{
    const users=ref([])
    const isLoading=ref(false)
    const error=ref(null)
    async function fetchAll(){
        isLoading.value=true
        error.value=null
        try{
            const{data}=await usersApi.list()
            users.value = data
        }
        catch(err){
            if (err.response?.status === 422) {
                error.value = err.response.data.errors
           } else {
            error.value=err
           } 
        }
        finally{
            isLoading.value=false
        }
    }
    return {users,isLoading,error,fetchAll}
})