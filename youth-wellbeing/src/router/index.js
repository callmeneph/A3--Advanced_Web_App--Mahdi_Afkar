import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const ResourcesView = () => import('@/views/ResourcesView.vue')
const CheckinView = () => import('@/views/CheckinView.vue')
const MyCheckinsView = () => import('@/views/MyCheckinsView.vue')
const AdminView = () => import('@/views/AdminView.vue')
const SignInView = () => import('@/views/SignInView.vue')



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/resources', name: 'resources', component: ResourcesView },
    { path: '/checkin', name: 'checkin', component: CheckinView },
    { path: '/me/checkins', name: 'my-checkins', component: MyCheckinsView },
    { path: '/admin', name: 'admin', component: AdminView },
    { path: '/signin', name: 'signin', component: SignInView },
  ],
})

export default router
