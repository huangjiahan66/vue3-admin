import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  config.headers.icode = '0CF892BFA5EBE38E'
  return config
})
export default service
