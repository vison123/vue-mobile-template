import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// state 中存放基础属性
const state = {
  test: ''
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createLogger()]
})
