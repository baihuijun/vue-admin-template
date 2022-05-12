import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import pack from "../../package.json"

// * 导入所有modules里面的router
const metaRouters = import.meta.globEager("./modules/*.ts")
// * 处理路由
export const routerArray: RouteRecordRaw[] = []
Object.entries(metaRouters).forEach(([, module]) => {
  routerArray.push(...module.default)
})

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: "login" }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login"
    }
  },
  ...routerArray,
  {
    // 找不到路由重定向到404页面
    path: "/:pathMatch(.*)",
    redirect: { name: "404" }
  }
]

const router = createRouter({
  history: createWebHashHistory(pack.name),
  routes,
  strict: false,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
