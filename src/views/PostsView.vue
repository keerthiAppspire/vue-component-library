<script setup>
    const posts=[
        {id:1,title:'Vue Router 101'},
        {id:2,title:'why pinia is great'},
        {id:3,title:'Mastering Composables'}
    ]
</script>
<template>
    <section>
        <h1>Posts</h1>
        <ul>
            <li v-for="p in posts" :key="p.id">
                <router-link :to="{ name:'post', params:{ id: p.id } }">
                    {{ p.title }}
                </router-link>"
            </li>
        </ul>
    </section>
</template>