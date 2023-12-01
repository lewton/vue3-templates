import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver()
        // 自动导入图标组件
        // IconsResolver({
        //   prefix: 'Icon'
        // })
      ]
      // 消除 eslint 自动引入 vue 相关函数的提示错误，生成配置文件
      // eslintrc: {
      //   enabled: true // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
      // }
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          // prefix: 'i', // 默认值是 'i'
          enabledCollections: ['ep']
        }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ]
    }),
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/var.scss";@import "@/assets/styles/mixin.scss";`
      }
    }
  },
  // server: {
  //   // https://cn.vitejs.dev/config/server-options.html#server-proxy
  //   proxy: {
  //     // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  build: {
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // external: ['vue'],
      // 分包1
      // manualChunks: {
      //   lodash: ['lodash']
      //   vue: ['vue']
      // },
      // 分包2
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return 'vendor'
        }
      }
    }
  }
})
