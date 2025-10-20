import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const ResourcesView = () => import('@/views/ResourcesView.vue')
const CheckinView = () => import('@/views/CheckinView.vue')
const MyCheckinsView = () => import('@/views/MyCheckinsView.vue')
const AdminView = () => import('@/views/AdminView.vue')
const SignInView = () => import('@/views/SignInView.vue')



