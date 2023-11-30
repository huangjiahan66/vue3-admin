// 路由守卫

import router from './router'
import store from './store'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  // 如果登录了 不能进入login
  // 没登陆 只能进入login

  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 若不存在用户信息，则需要获取用户信息
      if (!store.getters.hasUserInfo) {
        // 触发获取用户信息的 action
        await store.dispatch('user/getUserInfo')
      }
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
