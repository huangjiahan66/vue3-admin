import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入 svgIcon
import installIcons from '@/icons'
// 全局样式
import './styles/index.scss'

import installElementPlus from './plugins/element'
import './permission'

// i18n
import i18n from '@/i18n'
const app = createApp(App)
installElementPlus(app)
installIcons(app)

app.use(store).use(i18n).use(router).mount('#app')
