import { getUserInfo, login } from '@/api/sys'
import { TOKEN } from '@/constant'
import router from '@/router'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
    },

    // 获取用户信息
    async getUserInfo() {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    // 退出登录
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
