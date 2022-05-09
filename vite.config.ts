import { ConfigEnv } from "vite"
import { viteMockServe } from "vite-plugin-mock"
import viteCompression from "vite-plugin-compression"
import viteImagemin from "vite-plugin-imagemin"
import svgLoader from "vite-svg-loader"
import removeConsole from "vite-plugin-remove-console"
import { themePreprocessorPlugin } from "@zougt/vite-plugin-theme-preprocessor"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import vue from "@vitejs/plugin-vue"
import path from "path"
export default ({ command }: ConfigEnv) => {
  return {
    base: "./",
    plugins: [
      vue(),
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: "Icon"
          })
        ],
        imports: ["vue", "vue-router", "pinia", "@vueuse/core", "vue-i18n"],
        //为true时在项目根目录自动创建
        dts: "types/auto-imports.d.ts"
      }),
      Components({
        // 按需导入element-plus组件
        resolvers: [
          ElementPlusResolver({ importStyle: "sass" }),
          IconsResolver({
            // enabledCollections: ['ep']
          })
        ],
        dirs: ["src/components"],
        // include: [/^\.\/Base.*?\/index.vue$/],
        //组件名称包含目录，防止同名组件冲突
        directoryAsNamespace: true,
        //指定类型声明文件，为true时在项目根目录创建
        dts: "types/components.d.ts"
      }),
      Icons({
        autoInstall: true,
        compiler: "vue3"
      }),
      svgLoader(),
      removeConsole(),
      viteMockServe({
        mockPath: "mock",
        localEnabled: command === "serve"
      }),
      // gzip压缩
      viteCompression(),
      // 图片压缩
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false
        },
        optipng: {
          optimizationLevel: 7
        },
        mozjpeg: {
          quality: 20
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4
        },
        svgo: {
          plugins: [
            {
              name: "removeViewBox"
            },
            {
              name: "removeEmptyAttrs",
              active: false
            }
          ]
        }
      }),
      themePreprocessorPlugin({
        scss: {
          // 是否启用任意主题色模式，这里不启用
          arbitraryMode: false,
          // 提供多组变量文件
          multipleScopeVars: [
            {
              // 必需
              scopeName: "theme-default",
              // path 和 varsContent 必选一个
              path: path.resolve("src/theme/theme-default.scss")
              // varsContent参数等效于 path文件的内容
              // varsContent:`@primary-color:${defaultPrimaryColor};`
            },
            {
              scopeName: "theme-dark",
              path: path.resolve("src/theme/theme-dark.scss")
            }
          ],
          // 【注意】 css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
          includeStyleWithColors: [
            {
              color: "#ffffff"
            }
          ],
          // // 默认取 multipleScopeVars[0].scopeName
          defaultScopeName: "theme-default",
          // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
          extract: false,
          // // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
          outputDir: "",
          // // 会选取defaultScopeName对应的主题css文件在html添加link
          // themeLinkTagId: "theme-link-tag",
          // // "head"||"head-prepend" || "body" ||"body-prepend"
          // themeLinkTagInjectTo: "head",
          // // 是否对抽取的css文件内对应scopeName的权重类名移除
          removeCssScopeName: false
        }
      })
    ],
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
      // outDir: 'test'  打包后文件的名称 默认dist
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
      }
    }
  }
}
