// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import './assets/css/swiper-3.4.1.min.css'

Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

console.log(router)
