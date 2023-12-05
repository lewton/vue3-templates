import axios from 'axios'

export class Axioser {
  /**
   * Axioser Constructor
   * @param {object} config
   */
  constructor(config) {
    this.instance = axios.create(config)
    this.autoLoading = true
    this.autoErrorMessage = true

    /**
     * 请求拦截器
     */
    this.instance.interceptors.request.use(
      this.requestUseFulfilled.bind(this),
      this.requestUseRejected.bind(this)
    )

    /**
     * 响应拦截器
     */
    this.instance.interceptors.response.use(
      this.responseUseFulfilled.bind(this),
      this.responseUseRejected.bind(this)
    )
  }

  // 抽象方法 requestUseFulfilled
  requestUseFulfilled() {}
  // 抽象方法 requestUseRejected
  requestUseRejected() {}

  // 抽象方法 responseUseFulfilled
  responseUseFulfilled() {}
  // 抽象方法 responseUseRejected
  responseUseRejected() {}

  async request(config) {
    return await this.instance.request(config)
  }

  /**
   * get 请求
   * @param {string} url
   * @param {object} params
   * @param {object} headers
   * @returns
   */
  async get(url, params, headers) {
    return await this.request({
      method: 'get',
      url,
      params,
      headers
    })
  }

  /**
   * post 请求
   * @param {string} url
   * @param {object} data
   * @param {object} config
   * @returns
   */
  async post(url, data, config) {
    return await this.request({
      method: 'post',
      url,
      data,
      ...config
    })
  }

  /**
   * put 请求
   * @param {string} url
   * @param {object} data
   * @param {object} config
   * @returns
   */
  async put(url, data, config) {
    return await this.request({
      method: 'put',
      url,
      data,
      ...config
    })
  }

  /**
   * delete 请求
   * @param {string} url
   * @param {object} params
   * @param {object} headers
   * @returns
   */
  async delete(url, params, config) {
    return await this.request({
      method: 'delete',
      url,
      params,
      ...config
    })
  }
}
