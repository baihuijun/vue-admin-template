import { App } from 'vue'
import setupElementPlus from './element-plus'
import setupMotionPlugin from './motion'
export function setupPlugins(app: App) {
  setupMotionPlugin(app)
  setupElementPlus(app)
}
