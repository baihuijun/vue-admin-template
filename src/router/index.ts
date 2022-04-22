import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/utils/progress'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes]
})

export function setupRouter(app: App) {
  app.use(router)
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
