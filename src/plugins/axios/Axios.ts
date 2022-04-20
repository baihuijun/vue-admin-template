import axios, { AxiosRequestConfig } from "axios"
import NProgress from '@/utils/progress'
class Axios {
  private instance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }
  public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
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
    this.instance.interceptors.request.use((config) => {
      NProgress.start()
      return config;
    }, (error) => {
      return Promise.reject(error);
    });
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use((response) => {
      NProgress.done()
      return response;
    }, (error) => {
      NProgress.done()
      return Promise.reject(error);
    });
  }
}
export default Axios