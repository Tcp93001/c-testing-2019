import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import vuetify from './plugins/vuetify'
import {store} from './store/store.js'

const fb = require('./firebaseConfig.js')

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
