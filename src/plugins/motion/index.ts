import type { App } from 'vue'
import { MotionPlugin } from '@vueuse/motion'

export default function setupMotionPlugin(app: App) {
  app.use(MotionPlugin)
}