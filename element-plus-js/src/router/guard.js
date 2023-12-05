/**
 * 前端路由页面跳转一般逻辑：
 *
 * 流程：
 *      1. 不需要登录都可以访问的页面，登录相关页面（Login 、 Register）、其他页面
 *      2. 除开不需要登录页面，其他页面都需要登录
 *         需要判断是否有登录权限（token）-> 验证token接口 -> 返回 true / false
 *         false -> 重定向到 Login 页面，重新登录
 *         true -> 证明登录了，需要判断是否有访问权限 -> 接口：缓存/实时权限列表 -> true / false
 *              false -> 提示无权限访问，重定向到首页
 *              true -> 通过路由
 */

import { api } from '@/apis'
import { API_AUTH_PROFILE, ROUTER_HOME_NAME, ROUTER_LOGIN_NAME } from '@/config'
import { useUserStore } from '@/stores'

/*
  if (isLogin) {
    if (isAuth) {
      // 登录 && 去认证 => 已经登录的用户不需要去认证
      return false
    } else {
      // 登录 && 没去认证 => 已经登录的用户不需要去认证，什么都可以不做
    }
  } else {
    if (isAuth) {
      // 未登录 && 去认证 => 没有登录的用户需要去认证，什么都可以不做
    } else {
      // 未登录 && 没去认证 => 没有登录的用户需要去认证，没去认证则重定向去认证
      return { name: 'Login' }
    }
  }
 */
const NO_LOGIN_NAMES = [ROUTER_LOGIN_NAME]

/**
 * 路由前置验证
 * @param {object} to 路由对象
 * @returns {Promise<boolean | object>}
 */
export async function verify(to) {
  const userStore = useUserStore()
  const isLogin = !!userStore.token
  const isAuth = NO_LOGIN_NAMES.includes(to.name)
  if (isLogin) {
    if (isAuth) {
      // 返回 false，表示不需要跳转了
      // return false
      return { name: ROUTER_HOME_NAME }
    }
    // 再次实时检查用户是否已经登录并且有效
    const vt = await verifyToken()
    if (!vt) {
      // 验证失败，清空用户相关状态，并需要通知用户重新登录
      userStore.$reset()
      return { name: ROUTER_LOGIN_NAME }
    }
    // 继续判断用户权限，通过 token 拉取权限列表，缓存/实时权限列表
    // TODO...
  } else if (!isLogin && !isAuth) {
    return { name: ROUTER_LOGIN_NAME }
  }
}

/**
 * 需要判断是否有登录权限（token）-> 验证token接口 -> 返回 true / false
 * @returns {Promise<boolean>}
 */
export async function verifyToken() {
  try {
    const data = await api.get(API_AUTH_PROFILE)
    return typeof data !== 'undefined'
  } catch (err) {
    return false
  }
}
