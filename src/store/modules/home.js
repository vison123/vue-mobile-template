// mutation-types
import fetch from '@/utils/fetch'
import urls from '@/api/urls'
import { SET_HOME_GOODS_DATA } from '../mutation-types'
import { Toast } from 'mint-ui'

const global = {
  state: {
    homeGoodsData: []
  },
  mutations: {
    [SET_HOME_GOODS_DATA]: (state, payload) => {
      state.homeGoodsData = payload
    }
  },
  actions: {
    getGoods ({ commit, state, dispatch, rootState }) {
      fetch(urls.home.goods, {})
        .then(res => {
          if (res && res.code === 0) {
            commit(SET_HOME_GOODS_DATA, res.data)
          } else {
            Toast({
              message: res.errmsg,
              position: 'bottom'
            })
          }
        })
    }
  }
}

export default global
