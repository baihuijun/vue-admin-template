import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// element css
import 'element-plus/dist/index.css'
// element dark
import 'element-plus/theme-chalk/dark/css-vars.css'
// custom element dark
import '@/styles/element-dark.scss'
// custom element css
import '@/styles/element.scss'

// 引入所有图标
export default function setupElementPlugin(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
