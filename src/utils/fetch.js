import axios from 'axios'
import store from '@/store'

let fetcher = axios.create({
  method: 'post',
  baseURL: process.env.BASE_URL,
  withCredentials: true,
  transformRequest: [
    function (data) {
      return JSON.stringify(data)
    }
  ],
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

// 网络请求request拦截器
fetcher.interceptors.request.use(
  function (config) {
    if (config && config.data) {
      // TODO 对请求参数进行包装
      config.data.accessToken = store.getters.accessToken
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 网络请求response拦截器
fetcher.interceptors.response.use(function (response) {
  if (response.data.code === 60001 || response.data.code === 60002 || response.data.code === 60003 ||
    response.data.code === 60004 || response.data.code === 60005) {
    // TODO 对特定异常特殊处理
    console.log(response.data && response.data.errmsg)
  } else {
    return response.data
  }
}, function (err) {
  if (err.toString().startsWith('Network Error') >= 0) {
    console.log('网络异常，请检查当前互联网状态')
  } else if (err.toString().startsWith('Request failed with status code')) {
    console.log('接口异常')
  } else {
    console.log(err.toString())
  }
})

export default function fetch (apiUrl, arg, showLoading = true) {
  showLoading && store.commit('SHOW_LOADING', true)
  return fetcher.post(apiUrl, arg)
    .then(data => {
      showLoading && store.commit('SHOW_LOADING', false)
      if (data) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}
