import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import zh from './modules/zh'
import en from './modules/en'

const i18n = createI18n({
  locale: 'zh',
  messages: {
    zh,
    en
  }
})
export default function setupLanguagePlugin(app: App) {
  app.use(i18n)
}
