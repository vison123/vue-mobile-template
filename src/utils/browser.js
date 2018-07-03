/**
 *  判断浏览器类型
 */
/* eslint-disable */
const browser = {
  versions: (function() {
    const ua = navigator.userAgent
    return {
      mobile: !!ua.match(/AppleWebKit.*Mobile.*/),
      ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
      iphone: ua.indexOf('iPhone') > -1,
      wx: ua.indexOf('MicroMessenger') !== -1,
    }
  })(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase(),
}

export default browser
