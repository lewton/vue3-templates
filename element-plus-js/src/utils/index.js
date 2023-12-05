import { ElLoading, ElMessage } from 'element-plus'

/**
 * Element-plus - ElLoading
 * 打开： ElLoading.service({ lock: true, text, background: 'rgba(0, 0, 0, 0.7)' })
 * 关闭： ElLoadingInstance.close()
 */
let ElLoadingOpenCount = 0
let ElLoadingInstance = null

/**
 * 打开全屏 loading 框
 * @param {string} text
 */
export function openLoading(text = 'Loading') {
  if (ElLoadingOpenCount <= 0) {
    ElLoadingInstance = ElLoading.service({
      lock: true,
      text,
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  ElLoadingOpenCount++
}

/**
 * 关闭全屏 loading 框
 */
export function closeLoading() {
  ElLoadingOpenCount--
  if (ElLoadingOpenCount <= 0) {
    ElLoadingInstance?.close()
    // 重新初始化
    ElLoadingOpenCount = 0
    ElLoadingInstance = null
  }
}

/**
 * Element-plus - ElMessage
 * 消息提示框
 */

/**
 * 全局 错误提示
 * @param {string} text
 */
export function openErrorMessage(text) {
  ElMessage.error(text)
}

const KEBAB_REGEX = /[A-Z]/g
const KEBAB_REVERSE_REGEX = /-[a-z]/g

/**
 * 驼峰->横杠
 * @param {string} str
 * @returns
 */
export function kebabCase(str) {
  return (
    str.charAt(0).toLowerCase() +
    str.slice(1).replace(KEBAB_REGEX, function (match) {
      return '-' + match.toLowerCase()
    })
  )
}

/**
 * 横杠->驼峰
 * @param {string} str
 * @returns
 */
export function unKebabCase(str) {
  return (
    str.charAt(0).toUpperCase() +
    str.slice(1).replace(KEBAB_REVERSE_REGEX, function (match) {
      return match.slice(1).toUpperCase()
    })
  )
}
