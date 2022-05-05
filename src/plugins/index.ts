import { App } from 'vue'
import setupMotionPlugin from './motion'
export function setupPlugins(app: App) {
  setupMotionPlugin(app)
}
