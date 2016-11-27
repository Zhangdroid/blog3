import Vue from 'vue'

import App from './App'
import router from './router'
import store from './stores'

Vue.config.debug = true

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')

