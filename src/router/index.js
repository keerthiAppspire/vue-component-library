import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  // { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') }, // lazy
  { path: '/posts', name: 'posts', component: () => import('@/views/PostsView.vue') },
  { path: '/posts/:id', name: 'post', component: () => import('@/views/PostDetailView.vue'), props: true },
  { path: '/login' , name: 'login', component: () => import('@/views/LoginView.vue'),meta:{requiresGuest:true} },
  {path: '/dashboard', component: () => import('@/layouts/DashboardLayout.vue'),meta: { requiresAuth: true },
    children: [
      {path: '',name: 'dashboard', component: () => import('@/views/DashboardHome.vue'),meta: { title: 'DashBoard' } },
      {path: 'analytics', component: () => import('@/views/AnalyticsView.vue'), meta: { title: 'Analytics' } },
      {path: 'admin', component: () => import('@/views/AdminView.vue'), meta: { title: 'Admin', roles:['admin'] } }
    ]
  },
  { path: '/forbidden', name: 'forbidden' , component: ()=> import('@/views/ForbiddenView.vue') },
  
  { path: '/posts', name: 'posts', component: () => import('@/views/PostsView.vue') },
  
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFoundView.vue') },

  {
  path: '/register',
  name: 'register',
  component: () => import('@/views/RegisterationForm.vue')
},
]
const router =  createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved){
    if(saved) return saved
    return { top: 0, behavior: 'smooth' }
  }
})
router.beforeEach(async(to)=>{
  const auth = useAuthStore()

  
  if (to.meta.requiresAuth && !auth.isLoggedIn){
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  if(to.meta.requiresGuest && auth.isLoggedIn){
    return{name:'dashboard'}
  }
  if (to.meta.roles && !to.meta.roles.includes(auth.user?.role)) {
    return { name: 'forbidden' }
  }
})
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title}-App` : 'App'
})

export default router
