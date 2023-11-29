// 路由守卫

import router from './router'
import store from './store'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  // 如果登录了 不能进入login
  // 没登陆 只能进入login

  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
