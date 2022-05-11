/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module "*.vue" {
  import { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "nprogress"

declare module "@zougt/vite-plugin-theme-preprocessor"

declare module "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils"

declare module "js-md5"

// * Menu
declare namespace Menu {
  interface MenuOptions {
    path: string
    title: string
    icon?: string
    isLink?: string
    close?: boolean
    children?: MenuOptions[]
  }
}
