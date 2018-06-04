<template>
  <div class="home">
    <head-top head-title="首页"></head-top>
    <div class="category-list">
      <span>首页</span>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import footGuide from '@/components/footer/footGuide.vue'
import headTop from '@/components/header/head'
import BScroll from 'better-scroll'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new BScroll('.category-list', {
        deceleration: 0.001,
        bounce: true,
        swipeTime: 1800,
        click: true
      })
    })
  },
  components: {
    footGuide,
    headTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../assets/style/mixin.less';
  .head-right{
    display: flex;
    align-items: center;
    justify-content: center;
    .wh(4rem, 100%)
  }
  .right-text{
    .sc(0.6rem, #fff)
  }
  .category-list{
    margin-bottom: 1.95rem;
  }
</style>
