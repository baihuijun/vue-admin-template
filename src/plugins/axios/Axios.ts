import axios, { AxiosRequestConfig } from "axios"
import NProgress from "@/config/nprogress"
class Axios {
  private instance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }
  public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    }) as Promise<D>
  }
  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      config => {
        NProgress.start()
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      response => {
        NProgress.done()
        return response
      },
      error => {
        NProgress.done()
        return Promise.reject(error)
      }
    )
  }
}
export default Axios
