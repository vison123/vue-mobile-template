<template>
  <div class="app">
    <transition name="" mode="out-in">
      <keep-alive v-if="meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <div v-else>
        <head-top v-show="meta.showHeader" :head-title="meta.headTitle"></head-top>
        <router-view v-bind:class="{ 'app-foot-menu': meta.showFootMenu }"></router-view>
        <foot-guide v-show="meta.showFootMenu"></foot-guide>
      </div>
    </transition>
  </div>
</template>

<script>
import footGuide from '@/components/footer/footGuide.vue'
import headTop from '@/components/header/head'

export default {
  name: 'App',
  components: {
    footGuide,
    headTop
  },
  computed: {
    meta () {
      return this.$route.meta
    }
  }
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

  .app{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .app-foot-menu{
    margin-bottom: 1.95rem;
  }
</style>
