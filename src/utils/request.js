import { Message } from '@element-plus/icons'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/utils/auth'

// console.log('isCheckTimeout', isCheckTimeout())
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  if (store.getters.token) {
    // 如果token时间到了
    if (isCheckTimeout()) {
      // 退出操作isCheckTimeout
      store.dispatch('user/logout')
      return Promise.reject(new Error('token 失效！！！'))
    }
    // 如果token存在 注入token
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  config.headers.icode = '0CF892BFA5EBE38E'

  return config
})

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 404 500 请求失败
  (error) => {
    // 处理 token 超时问题
    // if (error.response && error.response.data && error.response.data.code === 401) {
    //   // token超时
    //   store.dispatch('user/logout')
    // }
    Message.error(error)
    return Promise.reject(new Error(error))
  }
)
export default service
