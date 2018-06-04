<template>
  <div class="home">
    <head-top head-title="首页"></head-top>
    <div class="hello">
      <span>首页</span>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import footGuide from '@/components/footer/footGuide.vue'
import headTop from '@/components/header/head'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
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
  .hello {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 1.95rem;
  }
</style>
