import {
  RECORD_ADDRESS
} from './mutation-types.js'

// 网络请求、异步操作
export default {
  async getUserInfo ({commit, state}) {
    setTimeout(() => {
      commit(RECORD_ADDRESS, {})
    }, 1000)
  }
}
