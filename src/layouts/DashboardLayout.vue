<template>
    <div class="layout">
        <aside class="sidebar">
            <h2>Dashboard</h2>
            <nav>
                <router-link to="/dashboard">Overview</router-link>
                <router-link to="/dashboard/analytics">Analytics</router-link>
                <router-link to="/dashboard/admin">Admin</router-link>
            </nav>
        </aside>
        <main>
            <router-view v-slot="{Component}">
              <Transition name="fade" mode="out-in">
                <component :is="Component" />
             </Transition>
            </router-view>
        </main>
    </div>    
</template>
<style scoped>
.layout{ display:grid; grid-template-columns: 220px 1fr; min-height: 100vh; }
.sidebar{ background-color: #111827; color:white; padding: 1.5rem; }
nav { display: flex; flex-direction: column; gap: .5rem; margin-top: 1rem; }
nav a { color: #d1d5db; text-decoration: none; padding: .5rem; border-radius: 6px; }
nav a.router-link-exact-active { background: #4f46e5; color: white; }
main { padding: 2rem; }
.fade-enter-active, .fade-leave-active { transition: opacity .50s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>