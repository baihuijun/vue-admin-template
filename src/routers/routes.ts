// import { RouteRecordRaw } from "vue-router"
// import layout from "@/layout/index.vue"
// const routes = [
//   {
//     path: "/login",
//     name: "login",
//     component: () => import("@/views/login.vue")
//   },
//   {
//     path: "/",
//     name: "home",
//     redirect: "/welcome",
//     component: layout,
//     children: [
//       {
//         path: "welcome",
//         name: "welcome",
//         component: () => import("@/views/welcome.vue")
//       }
//     ]
//   }
// ] as RouteRecordRaw[]

// export default routes
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import pack from "../../package.json"

// * 导入所有router
const metaRouters = import.meta.globEager("./modules/*.ts")

// * 处理路由
export const routerArray: RouteRecordRaw[] = []
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key])
  })
})

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: "login" }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login"
    }
  },
  ...routerArray
  // {
  //   // 找不到路由重定向到404页面
  //   path: "/:pathMatch(.*)",
  //   redirect: { name: "404" }
  // }
]

const router = createRouter({
  history: createWebHistory(pack.name),
  routes,
  strict: false,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
