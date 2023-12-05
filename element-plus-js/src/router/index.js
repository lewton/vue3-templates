import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/utils/nprogress'
import HomeView from '@/views/home/HomeView.vue'
import LoginView from '@/views/login/LoginView.vue'
import { ENV, ROUTER_HOME_NAME, ROUTER_LOGIN_NAME } from '@/config'
import { getImportComponent } from './dynamic-routes'
import { verify } from './guard'

const router = createRouter({
  history: createWebHistory(ENV.BASE_URL),
  // 静态路由列表
  routes: [
    {
      path: '/',
      name: ROUTER_HOME_NAME,
      component: HomeView
    },
    {
      path: '/login',
      name: ROUTER_LOGIN_NAME,
      component: LoginView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: getImportComponent('error-pages/Error404View.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach(async (to) => {
  // NProgress 开始
  NProgress.start()

  return verify(to)
})

router.onError((error) => {
  // NProgress 结束
  NProgress.done()
  console.error('路由错误', error.message)
})

router.afterEach(() => {
  // NProgress 结束
  NProgress.done()
})

export default router
