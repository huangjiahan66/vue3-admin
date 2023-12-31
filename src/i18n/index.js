import { createI18n } from 'vue-i18n'
import store from '@/store'
// const locale = 'en'

import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'

/**
 * 返回当前 lang  比如en 或者zh
 */
function getLanguage() {
  return store && store.getters && store.getters.language
}
const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
