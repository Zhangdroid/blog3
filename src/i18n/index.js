import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enUS from './en-US'
import zhCN from './zh-CN'

const locales = {
  'en-US': enUS,
  'zh_CN': zhCN
}

Vue.use(VueI18n)

Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang])
})

Vue.config.lang = navigator.language || 'en-US'
Vue.config.fallbackLang = 'en'

