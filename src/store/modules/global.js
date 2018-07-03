// mutation-types
// const SHOW_TOAST = 'SHOW_TOAST'
const SHOW_LOADING = 'SHOW_LOADING'

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
      state.global.showLoading = payload
    }
  },
  // 处理异步请求
  actions: {
  }
}

export default home
