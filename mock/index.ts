import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

const permissionRouter = {
  path: '/permission',
  redirect: '/permission/page/index',
  meta: {
    title: 'menus.permission',
    icon: 'lollipop',
    i18n: true,
    rank: 7
  },
  children: [
    {
      path: '/permission/page/index',
      name: 'permissionPage',
      meta: {
        title: 'menus.permissionPage',
        i18n: true
      }
    },
    {
      path: '/permission/button/index',
      name: 'permissionButton',
      meta: {
        title: 'menus.permissionButton',
        i18n: true,
        authority: []
      }
    }
  ]
}

// 添加不同按钮权限到/permission/button页面中
function setDifAuthority(authority: string, routes: any) {
  routes.children[1].meta.authority = [authority]
  return routes
}
export default [
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        success: true,
        result: {
          name: '用户信息',
          age: 18,
          avatar: '/images/xj.jpg'
        }
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '登录成功',
        success: true,
        result: {
          token: Random.string(100)
        }
      }
    }
  },
  {
    url: '/api/getAsyncRoutes',
    method: 'get',
    response: ({ query }: any) => {
      if (query.name === 'admin') {
        return {
          code: 0,
          info: [setDifAuthority('v-admin', permissionRouter)]
        }
      } else {
        return {
          code: 0,
          info: [setDifAuthority('v-test', permissionRouter)]
        }
      }
    }
  }
] as MockMethod[]
