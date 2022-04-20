import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  }
] as RouteRecordRaw[]


export default routes