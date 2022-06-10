import { defineStore } from 'pinia'
import { store } from '@/store'
// import { ascending, filterTree } from "@/routers/utils"
export const usePermissionStore = defineStore({
  id: 'permission',
  state: () => ({
    // 静态路由生成的菜单
    // constantMenus,
    // 整体路由生成的菜单（静态、动态）
    wholeMenus: []
  }),
  actions: {
    // 获取异步路由菜单
    // asyncActionRoutes(routes) {
    //   // if (this.wholeMenus.length > 0) return
    //   // this.wholeMenus = filterTree(ascending(this.constantMenus.concat(routes)))
    //   // this.menusTree = cloneDeep(
    //   //   filterTree(ascending(this.constantMenus.concat(routes)))
    //   // )
    //   // const getButtonAuth = (arrRoutes: Array<RouteConfigs>) => {
    //   //   if (!arrRoutes || !arrRoutes.length) return
    //   //   arrRoutes.forEach((v: RouteConfigs) => {
    //   //     if (v.meta && v.meta.authority) {
    //   //       this.buttonAuth.push(...v.meta.authority)
    //   //     }
    //   //     if (v.children) {
    //   //       getButtonAuth(v.children)
    //   //     }
    //   //   })
    //   // }
    //   // getButtonAuth(this.wholeMenus)
    // },
    // async changeSetting(routes) {
    //   await this.asyncActionRoutes(routes)
    // }
  }
})

export function usePermissionStoreHook() {
  return usePermissionStore(store)
}
