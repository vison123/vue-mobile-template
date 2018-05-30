<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import './assets/style/common.less';
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
