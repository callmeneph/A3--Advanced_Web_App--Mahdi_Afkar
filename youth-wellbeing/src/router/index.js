import { createRouter, createWebHistory } from 'vue-router'

const HomeView        = () => import('@/views/HomeView.vue')
const ResourcesView   = () => import('@/views/ResourcesView.vue')
const CheckinView     = () => import('@/views/CheckinView.vue')
const MyCheckinsView  = () => import('@/views/MyCheckinsView.vue')
const SignInView      = () => import('@/views/SignInView.vue')

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',            name: 'home',      component: HomeView },
    { path: '/resources',   name: 'resources', component: ResourcesView },
    { path: '/checkin',     name: 'checkin',   component: CheckinView },
    { path: '/mine',        name: 'mine',      component: MyCheckinsView },
    { path: '/signin',      name: 'signin',    component: SignInView },
  ],
})
