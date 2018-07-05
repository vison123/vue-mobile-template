import { SHOW_LOADING } from '../mutation-types'

const initialState = {
  accessToken: '',
  showLoading: false,
  showToast: false
}

const home = {
  state: initialState,
  // 必须同步执行
  mutations: {
    [SHOW_LOADING]: (state, payload) => {
      state.showLoading = payload
    }
  },
  // 处理异步请求
  actions: {
  }
}

export default home
