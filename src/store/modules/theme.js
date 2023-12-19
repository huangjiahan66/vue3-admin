import { DEFAULT_COLOR, MAIN_COLOR } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR
  }),
  mutations: {
    setMainColor(state, newColor) {
      state.mainColor = newColor
      // 色值保存到本地
      setItem(MAIN_COLOR, newColor)
    }
  }
}
