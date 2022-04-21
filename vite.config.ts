import { ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'
import svgLoader from 'vite-svg-loader'
import ElementPlus from 'unplugin-element-plus/vite'
import removeConsole from 'vite-plugin-remove-console'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ command }: ConfigEnv) => {
  return {
    base: './',
    plugins: [
      vue(),
      svgLoader(),
      ElementPlus(),
      removeConsole(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve'
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
              name: 'removeViewBox'
            },
            {
              name: 'removeEmptyAttrs',
              active: false
            }
          ]
        }
      })
    ],
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
}
