<template>
   <nav>
  <router-link to="/">Home</router-link>

  <router-link to="/about">
    About
  </router-link>

  <router-link to="/posts">
    Posts
  </router-link>

  <router-link to="/dashboard">
    Dashboard
  </router-link>
</nav>
  <!-- <main>
    <router-view />
  </main> -->
  
  <router-view v-slot="{ Component }">

<Transition name="fade" mode="out-in">

<component :is="Component"/>

</Transition>

</router-view>
 
</template>
<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>