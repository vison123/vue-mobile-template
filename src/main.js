// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './framework/rem'
import FastClick from 'fastclick'
import store from './store/index'
import { Toast, Button } from 'mint-ui'

if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

Vue.component(Toast.name, Toast)
Vue.component(Button.name, Button)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
