import http from "@/plugins/axios";

export function getAsyncRoutes(params: any) {
  return http.request({
    url: '/getAsyncRoutes',
    method: 'GET',
    params
  })
}