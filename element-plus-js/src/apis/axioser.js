import axios from 'axios'

export class Axioser {
  /**
   * Axioser Constructor
   * @param {object} config
   */
  constructor(config) {
    this.instance = axios.create(config)
  }

  /**
   * 请求拦截器
   */
  requestUse() {
    this.instance.interceptors.request.use(
      this.requestUseFulfilled.bind(this),
      this.requestUseRejected.bind(this)
    )
    return this
  }

  // 抽象方法 requestUseFulfilled
  requestUseFulfilled() {}
  // 抽象方法 requestUseRejected
  requestUseRejected() {}

  /**
   * 响应拦截器
   */
  responseUse() {
    this.instance.interceptors.response.use(
      this.responseUseFulfilled.bind(this),
      this.responseUseRejected.bind(this)
    )
    return this
  }

  // 抽象方法 responseUseFulfilled
  responseUseFulfilled() {}
  // 抽象方法 responseUseRejected
  responseUseRejected() {}

  async request(config) {
    try {
      const res = await this.instance.request(config)
      return [true, res]
    } catch (err) {
      return [false, err]
    }
  }
  /**
   * get 请求
   * @param {string} url
   * @param {object} params
   * @param {object} headers
   * @returns
   */
  async get(url, params, headers) {
    try {
      const res = await this.instance.request({
        method: 'get',
        url,
        params,
        headers
      })
      return [true, res]
    } catch (err) {
      return [false, err]
    }
  }

  async post(url, data, config) {
    try {
      const res = await this.instance.request({
        method: 'post',
        url,
        data,
        ...config
      })
      return [true, res]
    } catch (err) {
      return [false, err]
    }
  }

  async put(url, data, config) {
    try {
      const res = await this.instance.request({
        method: 'put',
        url,
        data,
        ...config
      })
      return [true, res]
    } catch (err) {
      return [false, err]
    }
  }

  async delete(url, params, config) {
    try {
      const res = await this.instance.request({
        method: 'delete',
        url,
        params,
        ...config
      })
      return [true, res]
    } catch (err) {
      return [false, err]
    }
  }
}
