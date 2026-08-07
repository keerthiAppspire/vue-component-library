import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  // { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') }, // lazy
  { path: '/posts', name: 'posts', component: () => import('@/views/PostsView.vue') },
  { path: '/posts/:id', name: 'post', component: () => import('@/views/PostDetailView.vue'), props: true },
  { path: '/login' , name: 'login', component: () => import('@/views/LoginView.vue') },
  {path: '/dashboard', component: () => import('@/layouts/DashboardLayout.vue'),meta: { requieresAuth: true },
    children: [
      {path: '',name: 'dashboard', component: () => import('@/views/DashboardHome.vue'),meta: { title: 'DashBoard' } },
      {path: 'analytics', component: () => import('@/views/AnalyticsView.vue'), meta: { title: 'Analytics' } },
      {path: 'admin', component: () => import('@/views/AdminView.vue'), meta: { title: 'Admin', roles:['admin'] } }
    ]
  },
  { path: '/forbidden', name: 'forbidden' , component: ()=> import('@/views/ForbiddenView.vue') },
  
  
  { path: '/posts', name: 'posts', component: () => import('@/views/PostsView.vue') },
  
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFoundView.vue') }
]
const router =  createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved){
    if(saved) return saved
    return { top: 0, behaivor: 'smooth' }
  }
})
function getAuth() {
  return{
    isLoggedIn: !!localStorage.getItem('token'),
    role: JSON.parse(localStorage.getItem('user') || 'null')?.role
  }
}
router.beforeEach((to)=>{
  const auth = getAuth()
  if (to.meta.requieresAuth && !auth.isLoggedIn){
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  if (to.meta.roles && !to.meta.roles.includes(auth.role)) {
    return { name: 'forbidden' }
  }
})
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title}-App` : 'App'
})
export default router
