import { AXIOS_CONFIG, ENV } from '@/config'
import { Axioser } from './axioser'
import { closeLoading, openErrorMessage, openLoading } from '@/utils'
import { useUserStore } from '@/stores'

class DefaultAxioser extends Axioser {
  requestUseFulfilled(config) {
    this.autoLoading && openLoading()

    // 在请求发送前可以进行一些操作，如添加请求头、处理请求参数等
    const userStore = useUserStore()
    const token = userStore.token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  }
  requestUseRejected(error) {
    this.autoLoading && closeLoading()

    // 处理请求错误
    return Promise.reject(error)
  }
  responseUseFulfilled(response) {
    this.autoLoading && closeLoading()

    const { data } = response

    if (!data) {
      this.autoErrorMessage && openErrorMessage('未知错误')
      return
    }

    if (data.code !== 200) {
      this.autoErrorMessage && openErrorMessage(data.msg)
      ENV.DEV && console.error('接口请求错误了', data?.stack)
      return
    }

    return data.data
  }
  responseUseRejected(error) {
    console.error(error)

    this.autoLoading && closeLoading()

    if (error.response.status === 401) {
      // Unauthorized 无效凭证，无法继续保持登录，需要清除当前用户状态，让用户重新登录
      console.error('Unauthorized')
    }

    // 统一响应错误提示处理
    this.autoErrorMessage && openErrorMessage(error.message)

    // 处理响应错误
    return Promise.reject(error)
  }
}

export default new DefaultAxioser(AXIOS_CONFIG.default)
