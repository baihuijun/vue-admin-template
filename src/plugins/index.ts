import { App } from 'vue'
import setupMotionPlugin from './motion'
import setupElementPlugin from './elementPlus'
export function setupPlugins(app: App) {
  setupElementPlugin(app)
  setupMotionPlugin(app)
}
