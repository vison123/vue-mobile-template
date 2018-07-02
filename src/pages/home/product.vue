<template>
  <section class="product">
    <div class="product-header">
      <div class="left">
        <span class="shop-name">{{product.storeName}}</span>
      </div>
      <div class="right">
        <span>{{`评价${product.areaAgentFee}分`}}</span>
        <span>{{`配送费&yen;${product.deliveryPrice}`}}</span>
      </div>
    </div>
    <div class="product-content">
      <div class="img-wrapper">
        <img :src="product.foodImageURL" :alt="product.foodName">
      </div>
      <div class="product-info">
        <div class="title" :class="{'in-active': !hasProduct}">{{product.foodName}}</div>
        <div class="info-body">
          <div class="body-left">
            <div class="remain">
              <div class="remain-num"
                   :class="{'active': hasProduct}"
              >
                <span>{{hasProduct ? `仅剩${product.promotionStock}份` : '今日已抢完'}}</span>
              </div>
              <div class="remain-bar">
                <div :style="{'width': `${product.promotionStock / product.dailyStock * 100}%`}" class="bar-inner"></div>
              </div>
            </div>
            <div class="price-wrapper">
              <div class="cur-price" :class="{'in-active': !hasProduct}">&yen;<span>{{product.activityPrice}}</span></div>
              <div class="pre-price"><span>&yen;{{product.originalPrice}}</span></div>
            </div>
          </div>
          <div class="right-button">
            <button :class="{'none': !hasProduct}">{{hasProduct ? '马上抢' : '进店逛逛'}}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasProduct () {
      return +this.product.promotionStock !== 0
    }
  }
}
</script>

<style lang="less" scoped>
  @redColor: #ff3618;

  .product {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    padding: 0 0.6rem;
  }

  .product-header {
    height: 1.42rem;
    box-sizing: border-box;
    border-bottom: 0.04rem dashed #dddddd;
    font-size: 0.5rem;
    font-family: "PingFangSC";
    color: #666;
    display: flex;
    justify-content: space-between;
  }

  .left, .right {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .left {
    flex: 1;
    max-width: 50%;
  }

  .shop-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .right span {
    padding: 0 0.3rem;
  }

  .right > span:last-of-type {
    padding-right: 0;
    position: relative;

    &
    ::before {
      content: '';
      width: 0.02rem;
      height: 0.4rem;
      position: absolute;
      top: 0.12rem;
      left: 0;
      background: #ddd;
    }

  }
  .product-content {
    display: flex;
    padding-top: 0.4rem;
  }

  .img-wrapper {
    width: 3.55rem;
    height: 3.55rem;
    overflow: hidden;
    position: relative;
    border-radius: 0.08rem;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
    }

  }
  .product-info {
    margin-left: 0.4rem;
    overflow: hidden;
    flex: 1;

    .title {
      font-size: 0.63rem;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: left;
    }

    .in-active {
      opacity: .4;
    }

    .info-body {
      padding-top: 0.2rem;
      display: flex;
      justify-content: space-between;
      flex: 1;
    }

    .body-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .remain-num {
      font-size: 0.43rem;
      color: #666;
      text-align: left;
    }

    .active {
      color: @redColor;
    }

    .remain-bar {
      width: 4.74rem;
      height: 0.2rem;
      border-radius: 0.12rem;
      background-color: #ddd;
      position: relative;
      margin-top: 0.12rem;
    }

    .bar-inner {
      height: 100%;
      background: linear-gradient(to right, #ff8355, #ff5757);
      position: absolute;
      left: 0;
      border-radius: 0.12rem;
    }

    .price-wrapper {
      display: flex;
      font-family: "PingFangSC";
      margin-top: 0.2rem;
    }

    .cur-price {
      color: @redColor;
      margin-right: 0.3rem;
      font-size: 0.5rem;

    span {
      font-weight: 500;
      font-size: 1rem;
    }

    }
    .pre-price {
      font-size: 0.5rem;
      color: #999;
      display: flex;
      flex-direction: column-reverse;

    span {
      margin-bottom: 0.2rem;
      text-decoration: line-through;
    }

    }
    .right-button {
      display: flex;
      flex-direction: column-reverse;

      button {
        width: 3.16rem;
        height: 1.4rem;
        border-radius: 0.08rem;
        box-sizing: border-box;
        background: linear-gradient(to right, #ff5339, #ff3618);
        font-size: 0.55rem;
        font-weight: 500;
        text-align: center;
        line-height: 1.4rem;
        color: #fff;
        margin-bottom: 0.4rem;
      }

      .none {
        background: #fff;
        border: 0.04rem solid @redColor;
        color: @redColor;
      }

    }
  }
</style>
