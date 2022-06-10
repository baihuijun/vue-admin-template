import { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/routers/constant'

const formRouter: Array<RouteRecordRaw> = [
  {
    path: '/form',
    name: 'form',
    redirect: '/form/basicForm',
    meta: {
      title: '表单 Form'
    },
    component: Layout,
    children: [
      {
        path: 'basicForm',
        name: 'basicForm',
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: '基础 Form',
          key: 'basicForm'
        },
        component: () => import('@/views/form/basicForm/index.vue')
      },
      {
        path: 'validateForm',
        name: 'validateForm',
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: '校验 Form',
          key: 'validateForm'
        },
        component: () => import('@/views/form/validateForm/index.vue')
      },
      {
        path: 'dynamicForm',
        name: 'dynamicForm',
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: '动态 Form',
          key: 'dynamicForm'
        },
        component: () => import('@/views/form/dynamicForm/index.vue')
      }
    ]
  }
]

export default formRouter
