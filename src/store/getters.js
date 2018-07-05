const getters = {
  accessToken: state => state.global.accessToken,
  showLoading: state => state.global.showLoading,
  homeGoodsData: state => {
    return state.home.homeGoodsData
  }
}

export default getters
