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
