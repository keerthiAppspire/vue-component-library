<script setup>
import {onMounted} from 'vue'
import {usePostsStore} from '@/stores/posts'
import {storeToRefs} from 'pinia'
const store=usePostsStore()
const {posts,isLoading,error}=storeToRefs(store)
onMounted(()=>store.fetchPosts({limit:5}))
</script>
<template>
    <section>
        <h1>Posts</h1>
        <p v-if="isLoading">Loading....</p>
        <p v-else-if="error">Error:{{ error.message }}</p>
        <ul v-else>
            <li v-for="p in posts" :key="p.id">{{ p.title }}</li>
        </ul>
    </section>
</template>