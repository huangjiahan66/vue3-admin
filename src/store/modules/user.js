import { login } from '@/api/sys'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    loginAction(context, userInfo) {
      const { username, password } = userInfo
      // 希望登录成功或者失败 在组件对应处理
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
