# vue-mobile-template

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## App Skeleton

使用 vue-skeleton-webpack-plugin 在构建时 Vue 预渲染骨架屏

## 组件懒加载

const Home = () => import('@/pages/home/home')
