import { App } from "vue"
import setupElementPlugin from "./elementPlus"
import setupLanguagePlugin from "./language"
export function setupPlugins(app: App) {
  setupElementPlugin(app)
  setupLanguagePlugin(app)
}
