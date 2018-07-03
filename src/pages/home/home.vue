<template>
  <div>
    <Product
      v-for="product in productLists"
      :key="product.foodId"
      class="product"
      :product="product"
    >
    </Product>
  </div>
</template>

<script>
import footGuide from '@/components/footer/footGuide.vue'
import headTop from '@/components/header/head'
import Product from './product.vue'
import productData from './data'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      productLists: productData
    }
  },
  mounted () {
  },
  components: {
    footGuide,
    headTop,
    Product
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../assets/style/mixin.less';
</style>
