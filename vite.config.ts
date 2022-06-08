import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import viteCompression from "vite-plugin-compression"
import viteImagemin from "vite-plugin-imagemin"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import vueSetupExtend from "vite-plugin-vue-setup-extend"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { resolve } from "path"
import pack from "./package.json"
// https://vitejs.dev/config/
export default defineConfig({
  base: `/${pack.name}/`,
  build: {
    outDir: pack.name, // 打包后文件的名称 默认dist
    minify: "terser",
    terserOptions: {
      // delete console/debugger
      compress: {
        // drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // Static resource classification and packaging
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      }
    }
  },
  server: {
    host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    cors: true,
    open: true,
    // https: false,
    // 代理跨域
    proxy: {
      "/api": {
        // target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0",
        target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        })
      ],
      imports: ["vue", "vue-router", "pinia", "@vueuse/core", "vue-i18n"],
      dts: "types/auto-imports.d.ts"
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"]
        })
      ],
      dts: "types/components.d.ts"
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz"
    }),
    vueSetupExtend(),
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
    })
  ]
})
