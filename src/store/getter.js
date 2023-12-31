import variables from '@/styles/variables.module.scss'
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => {
    return state.user.userInfo
  },
  /**
   * @returns true 表示已存在用户信息 false没有用户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => variables,
  sidebarOpened: (state) => state.app.sidebarOpened, // 汉堡按钮切换
  language: (state) => state.app.language,
  mainColor: (state) => state.theme.mainColor
}

export default getters
