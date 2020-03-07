<template>
  <div class="coupon_container" ref="wrapper">
    <!-- <ul class="coupon_list" v-if="coupons.length"> -->
      <ul class="coupon_list" >
        <li class="coupon_li" v-for="(coupon, index) in 10" :key="index">
          <a>
            <div class="left">
              <img src="">
            </div>
            <div class="middle ellipsis">
              <span class="title ellipsis">蒙牛特仑苏，嗨miuk纯
  牛奶-0脂肪</span>
              <span class="subtitle ellipsis">满100减30元</span>
            </div>
            <div class="right">
              <button>立即领取</button>
            </div>
          </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
 props: {
   id: Number
 },
 data () {
   return {}
 },
 mounted () {
  
 }

}
</script>

<style lang="stylus">
  .coupon_container
    position relative
    bottom 0
    overflow hidden
    .coupon_list
      .coupon_li
        margin 10px
        background-image: url(./images/coupon_bg.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        >a
          clearFix()
          display flex
          box-sizing border-box
          align-items center
          padding 10px
          width 100%;
          span
            display block
          .left
            flex 1
            >img
              width 70px
              height 70px
              background #f1f1f1
          .middle 
            flex 2
            .title
              font-size 14px
              color #000000
              line-height 18px
            .subtitle
              font-size 16px
              color #FF9B10
              font-weight 700
              line-height 24px

          .right
            flex 1
            button
              border none  
              font-size 12px
              color #ffffff
              text-align center
              background #139E4C
              width 72px
              height 28px
              line-height 28px
              border-radius 14px
              position relative
              left 50%
              transform translateX(-50%)



</style>