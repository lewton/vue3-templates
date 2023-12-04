/**
 * 环境变量常量
 * @type {{MODE: string, BASE_URL: string, PROD: boolean, DEV: boolean, SSR: boolean, VITE_API_BASE_URL: string, VITE_API_TIMEOUT: integer, VITE_APP_TITLE: string}}
 *
 * @example
 * 链接：https://cn.vitejs.dev/guide/env-and-mode.html#env-variables
 * MODE: {string} 应用运行的模式。
 * BASE_URL: {string} 部署应用时的基本 URL。他由base 配置项决定。
 * PROD: {boolean} 应用是否运行在生产环境（使用 NODE_ENV='production' 运行开发服务器或构建应用时使用 NODE_ENV='production' ）。
 * DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
 * SSR: {boolean} 应用是否运行在 server 上。
 *
 * 为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
 * VITE_API_BASE_URL：{string} 接口的网关域名
 * VITE_API_TIMEOUT：{integer} 接口请求超时时间
 * VITE_APP_TITLE：{string} 网站首页标题
 */
export const ENV = import.meta.env

/**
 * AXIOS 请求库的实例配置
 */
export const AXIOS_CONFIG = {
  default: {
    baseURL: ENV.VITE_API_BASE_URL,
    // 注意：浏览器开启 slow 3g，超时时间太短了，请求所有接口可能会超时导致cancel状态
    // 设置请求的超时时间（以毫秒为单位），这里是10秒
    timeout: ENV.VITE_API_TIMEOUT
  }
}

/**
 * PINIA 状态管理配置
 *   _PERSIST 指的是状态管理持久化存储名称
 */
export const PINIA_MAIN = 'main'
export const PINIA_MAIN_PERSIST = 'main'
export const PINIA_USER = 'user'
export const PINIA_USER_PERSIST = 'user'
