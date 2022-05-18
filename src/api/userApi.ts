import http from "@/plugins/axios"

export function getMenuList() {
  return http.request<Menu.MenuOptions[]>({
    url: "/menu/list",
    method: "GET"
  })
}
interface LoginInterface {
  username: string
  password: string
}
interface LoginResultInterface {
  access_token: string
}

export function login(data: LoginInterface) {
  return http.request<LoginResultInterface>({
    url: "/login",
    method: "POST",
    data
  })
}
export function getUserTableList(data: any) {
  return http.request({
    url: "/user/list",
    method: "POST",
    data
  })
}

// * 获取按钮权限
export function getAuthorButtons() {
  return http.request({
    url: "/auth/buttons",
    method: "GET"
  })
}

// * 切换用户状态
export function changeUserStatus(params: { id: string; status: number }) {
  return http.request({
    url: "/user/change",
    method: "POST",
    params
  })
}
