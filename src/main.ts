import { createApp } from 'vue'
import router, { setupRouter } from './routers'
import { setupPlugins } from './plugins'
import { setupStore } from './store'
import App from './App.vue'
import './assets/iconfont/iconfont.scss'
import './styles/tailwind.scss'
import './styles/index.scss'
async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  setupPlugins(app)
  setupStore(app)
  await router.isReady()
  app.mount('#app')
}

bootstrap()
