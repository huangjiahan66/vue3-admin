import { login } from '@/api/sys'
import { TOKEN } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
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
            this.commit('user/setToken', data.token)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
