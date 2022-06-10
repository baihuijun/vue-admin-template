import { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/routers/constant'

// 超级表格模块
const assemblyRouter: Array<RouteRecordRaw> = [
  {
    path: '/assembly',
    component: Layout,
    redirect: '/assembly/batchImport',
    meta: {
      title: '常用组件'
    },
    children: [
      {
        path: '/assembly/batchImport',
        name: 'batchImport',
        component: () => import('@/views/assembly/batchImport/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: '批量导入数据',
          key: 'batchImport'
        }
      }
    ]
  }
]

export default assemblyRouter
