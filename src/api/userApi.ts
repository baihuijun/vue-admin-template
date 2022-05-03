import http from '@/plugins/axios'

interface UserInterFace {
  name: string
  age: number
  avatar: string
  permissions: string[]
}

export function getUserInfo() {
  return http.request<UserInterFace>({
    url: 'getUserInfo',
    params: {}
  })
}

interface LoginInterface {
  username: string
  password: string
}
interface LoginResultInterface {
  token: string
}

export function login(data: LoginInterface) {
  return http.request<LoginResultInterface>({
    url: '/login',
    method: 'POST',
    data
  })
}
