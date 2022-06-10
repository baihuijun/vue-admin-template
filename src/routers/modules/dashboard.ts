import { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/routers/constant'
// 数据可视化模块
const dashboardRouter: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/dataVisualize',
    children: [
      {
        path: 'dataVisualize',
        name: 'dataVisualize',
        component: () => import('@/views/dashboard/dataVisualize/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: '数据可视化',
          key: 'dataVisualize'
        }
      },
      {
        path: 'embedded',
        name: 'embedded',
        component: () => import('@/views/dashboard/embedded/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: '内嵌页面',
          key: 'embedded'
        }
      }
    ]
  }
]

export default dashboardRouter
