import { RouteComponent, RouteRecordRaw } from 'vue-router'
import { getAsyncRoutes } from '@/api/userRoutes'
import { usePermissionStoreHook } from '@/store/modules/permission'

export const initRouter = (name: string) => {
  return new Promise(resolve => {
    // getAsyncRoutes({ name }).then(({ info }) => {
    //   if (info.length === 0) {
    //     usePermissionStoreHook().changeSetting(info)
    //   } else {
    //     console.log(222)
    //   }
    // })
  })
}

// 过滤meta中showLink为false的路由
export const filterTree = (routes: any) => {
  const newTree = routes.filter(
    (v: { meta: { showLink: boolean } }) => v.meta?.showLink !== false
  )
  newTree.forEach(
    (v: { children: any }) =>
      v.children && (v.children = filterTree(v.children))
  )
  return newTree
}

// 按照路由中meta下的rank等级升序来排序路由
export const ascending = (arr: any[]) => {
  arr.forEach(v => {
    if (v?.meta?.rank === null) v.meta.rank = undefined
    if (v?.meta?.rank === 0) {
      if (v.name !== 'home' && v.path !== '/') {
        console.warn('rank only the home page can be 0')
      }
    }
  })
  return arr.sort(
    (a: { meta: { rank: number } }, b: { meta: { rank: number } }) => {
      return a?.meta?.rank - b?.meta?.rank
    }
  )
}

// 通过path获取父级路径
export const getParentPaths = (path: string, routes: RouteRecordRaw[]) => {
  // 深度遍历查找
  function dfs(routes: RouteRecordRaw[], path: string, parents: string[]) {
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i]
      // 找到path则返回父级path
      if (item.path === path) return parents
      // children不存在或为空则不递归
      if (!item.children || !item.children.length) continue
      // 往下查找时将当前path入栈
      parents.push(item.path)
      if (dfs(item.children, path, parents).length) return parents
      // 深度遍历查找未找到时当前path 出栈
      parents.pop()
    }
    // 未找到时返回空数组
    return []
  }
  return dfs(routes, path, [])
}

// 查找对应path的路由信息
export const findRouteByPath = (path: string, routes: any): any => {
  let res = routes.find((item: { path: string }) => item.path == path)
  if (res) return res
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].children instanceof Array && routes[i].children.length > 0) {
      res = findRouteByPath(path, routes[i].children)
      if (res) return res
    }
  }
  return null
}
