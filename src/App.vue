<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link :to="{ name: 'post', params: {id: 1} }">First Post</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>
<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>