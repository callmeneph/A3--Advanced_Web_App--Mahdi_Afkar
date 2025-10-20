import { createRouter, createWebHistory } from 'vue-router'

const HomeView        = () => import('@/views/HomeView.vue')
const CheckinView     = () => import('@/views/CheckinView.vue')
const MyCheckinsView  = () => import('@/views/MyCheckinsView.vue')
const ResourcesView   = () => import('@/views/ResourcesView.vue')
const SignInView      = () => import('@/views/SignInView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',               name: 'home',        component: HomeView },
    { path: '/checkin',        name: 'checkin',     component: CheckinView },
    { path: '/my-checkins',    name: 'mycheckins',  component: MyCheckinsView },
    { path: '/resources',      name: 'resources',   component: ResourcesView },
    { path: '/signin',         name: 'signin',      component: SignInView },
    { path: '/:pathMatch(.*)*', name: 'notfound',   component: HomeView }
  ]
})

export default router
