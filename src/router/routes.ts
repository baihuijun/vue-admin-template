import { RouteRecordRaw } from 'vue-router'
import layout from '@/layout/index.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: layout
  }
] as RouteRecordRaw[]

export default routes
