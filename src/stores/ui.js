import {defineStore} from 'pinia'
import {ref,computed} from 'vue'
export const useUiStore=defineStore('ui',()=>{
    const pendingRequests=ref(0)
    const isLoading=computed(()=>pendingRequests.value>0)
    return {pendingRequests,isLoading}
})