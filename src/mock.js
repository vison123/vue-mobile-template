import Mock from 'mockjs'
import api from './api/urls'
import homeGoodsData from './mock/json/homeGoodsData.json'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(new RegExp(api.home.goods, 'i'), 'post', homeGoodsData)

export default Mock
