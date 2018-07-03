import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import home from './modules/home'
import global from './modules/global'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    global
  },
  getters,
  plugins: [createLogger()]
})
