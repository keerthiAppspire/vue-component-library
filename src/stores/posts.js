import {defineStore} from 'pinia'
import {ref} from 'vue'
import {postsApi} from '@/services/posts'
export const usePostsStore=defineStore('posts',()=>{
    const posts=ref([])
    const isLoading=ref(false)
    const error=ref(null)
    async function fetchPosts(opts){
        isLoading.value=true;error.value=null
        try{
            const{data}=await postsApi.list(opts)
            posts.value=data
        }
        catch(e){
            error.value=e
        }
        finally{
            isLoading.value=false
        }
    }
    async function addPost(payload){
        const {data} = await postsApi.create(payload)
        posts.value.unshift(data)
    }
    return{posts,isLoading,error,fetchPosts,addPost}
})