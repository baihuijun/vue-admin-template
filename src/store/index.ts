import type { App } from 'vue'
import { defineStore } from 'pinia'
import { GlobalState } from './interface'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import piniaPersistConfig from '@/config/piniaPersist'

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'GlobalState',
  // state: 返回对象的函数
  state: (): GlobalState => ({
    // Token
    token: '',
    // userInfo
    userInfo: '',
    // element组件大小
    assemblySize: 'default',
    // language
    language: '',
    // theme
    theme: 'light'
  }),
  actions: {
    // set token
    setToken(token: string) {
      this.token = token
    },
    // set userInfo
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    // set AssemblySize
    setAssemblySizeSize(assemblySize: string) {
      this.assemblySize = assemblySize
    },
    // updateLanguage
    updateLanguage(language: string) {
      this.language = language
    },
    // setTheme
    setTheme(theme: string) {
      this.theme = theme
    }
  },
  persist: piniaPersistConfig('GlobalState')
})

const store = createPinia()
store.use(piniaPersist)
export function setupStore(app: App) {
  app.use(store)
}
export { store }
