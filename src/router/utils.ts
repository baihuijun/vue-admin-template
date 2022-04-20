import { getAsyncRoutes } from '@/api/userRoutes'

export const initRouter = (name: string) => {
  return new Promise((resolve) => {
    getAsyncRoutes({ name }).then(res => {
      console.log(res);
      resolve(res)
    })
  })
}