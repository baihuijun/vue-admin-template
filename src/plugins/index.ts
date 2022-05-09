import { App } from "vue";
import setupMotionPlugin from "./motion";
import setupElementPlugin from "./elementPlus";
import setupLanguagePlugin from "./language";
export function setupPlugins(app: App) {
  setupElementPlugin(app);
  setupMotionPlugin(app);
  setupLanguagePlugin(app);
}
