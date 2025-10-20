// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const HomeView = () => import('@/views/HomeView.vue')
const ResourcesView = () => import('@/views/ResourcesView.vue')
const CheckinView = () => import('@/views/CheckinView.vue')
const MyCheckinsView = () => import('@/views/MyCheckinsView.vue')
const SignInView = () => import('@/views/SignInView.vue')
// const AdminView = () => import('@/views/AdminView.vue') // if you add later

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/resources', name: 'resources', component: ResourcesView },
    { path: '/check-in', name: 'checkin', component: CheckinView, meta: { requiresAuth: true } },
    { path: '/my', name: 'my', component: MyCheckinsView, meta: { requiresAuth: true } },
    { path: '/sign-in', name: 'signin', component: SignInView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

router.beforeEach((to) => {
  const { user } = useAuth()
  if (to.meta.requiresAuth && !user.value) {
    return { name: 'signin', query: { redirect: to.fullPath } }
  }
})

export default router
