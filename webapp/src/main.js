import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'

Vue.use(Vuetify, {
  theme: {
    primary: '#0a1f30',
    secondary: '#d6e1eb',
    content: '#eeeff1',
    footer: '#eeeff1',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    neutro: '#fff',
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})