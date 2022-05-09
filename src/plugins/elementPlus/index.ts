import type { App } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 引入所有图标
export default function setupElementPlugin(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}
