<template>
  <div>
    <Product
      v-for="product in homeGoodsData"
      :key="product.foodId"
      class="product"
      :product="product"
    >
    </Product>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import footGuide from '@/components/footer/footGuide.vue'
import headTop from '@/components/header/head'
import Product from './product.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([
      'homeGoodsData'
    ])
  },
  mounted () {
    this.getGoods()
  },
  components: {
    footGuide,
    headTop,
    Product
  },
  methods: {
    ...mapActions(['getGoods'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../assets/style/mixin.less';
</style>
